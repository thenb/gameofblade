import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GameoverPage } from '../gameover/gameover';
import { ValidatePage } from '../validate/validate';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { AnalyticsDirective } from '../../directives/analytics/analytics';

@Component({
  selector: 'page-fail',
  templateUrl: 'fail.html'
})
export class FailPage { 
  
  private callback : any;
  private actual_player: any; 


  constructor(public navCtrl: NavController, public navParams: NavParams, private ga: AnalyticsDirective) {  
    this.callback = this.navParams.get('callback');
    this.actual_player = this.navParams.get('player');   
    this.ga.call('Fail');
  }
  
  nextTurn() {    
    this.callback().then( () => { this.navCtrl.pop() });
  }
}
