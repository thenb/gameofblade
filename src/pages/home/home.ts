import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';
import { NewGamePage } from '../newgame/newgame';
import { isNullOrUndefined } from 'util';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AlertController } from 'ionic-angular';
import { AnalyticsDirective } from '../../directives/analytics/analytics';
import { ToastController } from 'ionic-angular';
import { CONTENT } from '../../assets/content/content';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;

  private hasResume : any;
  private backController : boolean;

  
  constructor(public navCtrl: NavController, private socialSharing: SocialSharing, platform: Platform, private alertCtrl: AlertController, private ga: AnalyticsDirective, public toastCtrl: ToastController) {
    this.backController = true;

    //if theres something on turn number
    let turn_number = window.localStorage.getItem('turn_number');
    if(!turn_number){ 
      let turn_number = '0';
      window.localStorage.setItem('turn_number', turn_number);
    } 
    if(+turn_number!=0){ 
      this.hasResume=true;     
    } 

    platform.registerBackButtonAction(() => {
      this.presentConfirm();
    },0);
  }

  ionViewDidLoad() {
    this.ga.call('Home');
  }

  presentConfirm() {
    if(this.backController == true){
      this.backController = false;
      let alert = this.alertCtrl.create({
        title: 'Go Home',
        message: 'Do you want to quit the game?',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
              this.backController = true;
            }
          },
          {
            text: 'Yes',
            handler: () => {
              this.backController = true;
              this.navCtrl.popToRoot();
            }
          }
        ]
      });
      alert.present();
    }

    
  }

  startGame() {
    window.localStorage.setItem('player_1_name', 'undefined');
    window.localStorage.setItem('player_1_status', 'undefined');
    window.localStorage.setItem('player_2_name', 'undefined');
    window.localStorage.setItem('player_2_status', 'undefined');
    window.localStorage.setItem('player_3_name', 'undefined');
    window.localStorage.setItem('player_3_name', 'undefined');
    window.localStorage.setItem('player_4_name', 'undefined');
    window.localStorage.setItem('player_4_status', 'undefined');       
    this.navCtrl.push(NewGamePage);
  }

  share() {
    this.socialSharing.share("Text to be shared \nExternal urls:", "Subject", "https://static.findie.me/bladelife/logos/bladelife-logo.png", "https://bladelife.tv/ \nhttps://bladelife.tv/");
  }

  commingSoon(){
    this.presentToast(CONTENT.NewGame.commingSoon);
  }

  presentToast(data) {
    
    let toast = this.toastCtrl.create({
      message: data,
      duration: 3000,
      position: 'top',
      cssClass: 'toastCenter'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
