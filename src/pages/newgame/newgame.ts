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

  private player_1_name: string;
  private player_2_name: string;
  private player_3_name: string;
  private player_4_name: string;
  private player_1_status: any;
  private player_2_status: any;
  private player_3_status: any;
  private player_4_status: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {    
    this.player_1_name = 'Francisco';
    this.player_2_name = 'Pedro';
    this.player_3_name = '';
    this.player_4_name = ''; 
  }

  startTrick() {   
    if(this.validateGame()){ 
      if(this.player_1_name != ''){
        window.localStorage.setItem('player_1_name', this.player_1_name); 
        this.player_1_status = 0; 
        window.localStorage.setItem('player_1_status', this.player_1_status);
      } 
      if(this.player_2_name != ''){
        window.localStorage.setItem('player_2_name', this.player_2_name);
        this.player_2_status = 0; 
        window.localStorage.setItem('player_2_status', this.player_2_status);
      }     
      if(this.player_3_name != ''){
        window.localStorage.setItem('player_3_name', this.player_3_name);
        this.player_3_status = 0; 
        window.localStorage.setItem('player_3_status', this.player_3_status);
      }     
      if(this.player_4_name != ''){
        window.localStorage.setItem('player_4_name', this.player_4_name);
        this.player_4_status = 0; 
        window.localStorage.setItem('player_4_status', this.player_4_status);
      }     
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
    if(this.player_1_name.replace(/ /g,'') != ''){
      players++;
    }else{
      this.player_1_name = '';
    }
    if(this.player_2_name.replace(/ /g,'') != ''){
      players++;
    }else{
      this.player_2_name = '';
    }
    if(this.player_3_name.replace(/ /g,'') != ''){
      players++;
    }else{
      this.player_3_name = '';
    }
    if(this.player_4_name.replace(/ /g,'') != ''){
      players++;
    }else{
      this.player_4_name = '';
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
