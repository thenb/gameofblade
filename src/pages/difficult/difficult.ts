import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TricksPage } from '../tricks/tricks';
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
    this.player_status = this.navParams.get('player_status');   
  }

  startTrick() {    
    this.navCtrl.push(TricksPage, {level: this.level, player_status : this.player_status});
  }

  back() {   
    //remove the page from the stack and back to home
    this.navCtrl.pop();
  }
 
  setEasy() {
    this.level = 'easy';
  }

  setModerate() {
    this.level = 'moderate';
  }

  setDifficult() {
    this.level = 'difficult';
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
