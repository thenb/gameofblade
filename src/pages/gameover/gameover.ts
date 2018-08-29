import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AnalyticsDirective } from '../../directives/analytics/analytics';

@Component({
  selector: 'page-gameover',
  templateUrl: 'gameover.html'
})
export class GameoverPage {  

  private msg_victory: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing, private ga: AnalyticsDirective) {    
    this.msg_victory = window.localStorage.getItem('msg_victory');
    this.ga.call('Fail');
  }

  newGame() {    
    this.navCtrl.popToRoot();
  } 

  share() {
    this.socialSharing.share("Text to be shared \nExternal urls:", "Subject", "https://static.findie.me/bladelife/logos/bladelife-logo.png", "https://bladelife.tv/ \nhttps://bladelife.tv/");
  }

}
