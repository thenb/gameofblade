import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingPage } from '../loading-game/loading-game';
import { ToastController } from 'ionic-angular';
import { CONTENT } from '../../assets/content/content';

@Component({
  selector: 'page-difficult',
  templateUrl: 'difficult.html'
})
export class DifficultPage {  

  private level: string;  
  private player_status: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {    
    this.level = 'easy';  
    window.localStorage.setItem('level',this.level);   
  }

  startTrick() {    
    this.navCtrl.push(LoadingPage);
  }

  back() {
    this.navCtrl.pop();
  }
 
  setEasy() {
    this.level = 'easy';
    window.localStorage.setItem('level',this.level); 
  }

  setModerate() {
    this.level = 'moderate';
    window.localStorage.setItem('level',this.level); 
  }

  setDifficult() {
    this.level = 'difficult';    
    window.localStorage.setItem('level',this.level); 
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
