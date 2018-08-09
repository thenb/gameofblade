import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DifficultPage } from '../difficult/difficult';
import { ToastController } from 'ionic-angular';
import { CONTENT } from '../../assets/content/content';

@Component({
  selector: 'page-newgame',
  templateUrl: 'newgame.html'
})
export class NewGamePage {  

  private player_1: string;
  private player_2: string;
  private player_3: string;
  private player_4: string;
  private player_status: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {    
    this.player_1 = 'Francisco';
    this.player_2 = 'Pedro';
    this.player_3 = '';
    this.player_4 = '';
  }

  startTrick() {   

    if(this.validateGame()){ 
      this.player_status = []
      if(this.player_1 != ''){
        this.player_status.push({name:this.player_1, status:''})
      }
      
      if(this.player_2 != ''){
        this.player_status.push({name:this.player_2, status:''})
      }

      if(this.player_3 != ''){
        this.player_status.push({name:this.player_3, status:''})
      }

      if(this.player_4 != ''){
        this.player_status.push({name:this.player_4, status:''})
      }

      window.localStorage.setItem('turn_number', '1');
      //put the tricks page on the stack and go to page
      //Call TricksPage with game conf as parameter
      this.navCtrl.push(DifficultPage, {player_status : this.player_status});
    }else{
      this.presentToast(CONTENT.NewGame.erroCampoObrigatorio);
    }
  }

  cancelGame() {   
    //remove the page from the stack and back to home
    this.navCtrl.pop();
  }  

  validateGame() {
    var players = 0;
    if(this.player_1.replace(/ /g,'') != ''){
      players++;
    }else{
      this.player_1 = '';
    }
    if(this.player_2.replace(/ /g,'') != ''){
      players++;
    }else{
      this.player_2 = '';
    }
    if(this.player_3.replace(/ /g,'') != ''){
      players++;
    }else{
      this.player_3 = '';
    }
    if(this.player_4.replace(/ /g,'') != ''){
      players++;
    }else{
      this.player_4 = '';
    }

    if(players>1){
      return true;
    }

    return false;
  }

  presentToast(data) {
    
    let toast = this.toastCtrl.create({
      message: JSON.stringify(data),
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
