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
  private player_1_status: any;
  private player_2_status: any;
  private player_3_status: any;
  private player_4_status: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {    
    this.player_1 = 'Francisco';
    this.player_2 = 'Pedro';
    this.player_3 = '';
    this.player_4 = ''; 
  }

  startTrick() {   
    if(this.validateGame()){ 
      if(this.player_1 != ''){
        this.player_1_status ={name:this.player_1, status:''};
      }  
      window.localStorage.setItem('player_1_status', this.player_1_status);    
      if(this.player_2 != ''){
        this.player_2_status ={name:this.player_2, status:''};
      }
      window.localStorage.setItem('player_2_status', this.player_2_status);
      if(this.player_3 != ''){
        this.player_3_status ={name:this.player_3, status:''};
      }
      window.localStorage.setItem('player_3_status', this.player_3_status);
      if(this.player_4 != ''){
        this.player_4_status ={name:this.player_4, status:''};
      }
      window.localStorage.setItem('player_4_status', this.player_4_status);
      window.localStorage.setItem('turn_number', '1');      
      this.navCtrl.push(DifficultPage);
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
