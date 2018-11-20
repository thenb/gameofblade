import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TurnsPage } from '../turns/turns';
import { ValidatePage } from '../validate/validate';
import { CONTENT } from '../../assets/content/content';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { AnalyticsDirective } from '../../directives/analytics/analytics';

@Component({
  selector: 'page-tricks',
  templateUrl: 'tricks.html'
})
export class TricksPage {  

  private trick : string;
  private trick_list : any;
  private level : any;
  private turn : any;
  private count_tricks : number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private ga: AnalyticsDirective) {    
    this.turn = 0;
    this.trick = '';
    this.count_tricks = 0;   
    this.level = window.localStorage.getItem('level');  
    if(this.level == 'easy'){
      this.trick_list = Object.assign([], CONTENT.easy_tricks);
    }else if(this.level == 'moderate'){
      this.trick_list = Object.assign([], CONTENT.moderate_tricks);
    }else if(this.level == 'difficult'){
      this.trick_list = Object.assign([], CONTENT.hard_tricks);
    }
    this.turn = window.localStorage.getItem('turn_number');  
    this.ga.call('Trick');
  }

  startTurn() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario 
    this.turn++;
    window.localStorage.setItem('turn_number', this.turn);
    window.localStorage.setItem('trick', this.trick);   
    this.navCtrl.push(ValidatePage);
    this.count_tricks = 0;
    this.ga.call('StartTurn');
  }

  cancelGame() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.pop();
  }

  changeTrick() {
    this.ga.call('ChangeTrick');
    if(this.trick_list.length == 1){
      if(this.level == 'easy'){
        this.trick_list = Object.assign([], CONTENT.easy_tricks);
      }else if(this.level == 'moderate'){
        this.trick_list = Object.assign([], CONTENT.moderate_tricks);
      }else if(this.level == 'hard'){
        this.trick_list = Object.assign([], CONTENT.hard_tricks);
      }
    }
    var key = Math.floor(Math.random() * this.trick_list.length);
    this.trick = this.trick_list[key];
    this.trick_list.splice(key, 1);
    this.count_tricks++;
  }

  ionViewDidEnter() {
    this.turn = window.localStorage.getItem('turn_number');
  }
 
}
