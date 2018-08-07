import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GameoverPage } from '../gameover/gameover';

@Component({
  selector: 'page-fail',
  templateUrl: 'fail.html'
})
export class FailPage {  

  constructor(public navCtrl: NavController, public navParams: NavParams) {    
  }

  gameover() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(GameoverPage);
  }
 
}
