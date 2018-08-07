import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TurnsPage } from '../turns/turns';

@Component({
  selector: 'page-tricks',
  templateUrl: 'tricks.html'
})
export class TricksPage {  

  constructor(public navCtrl: NavController, public navParams: NavParams) {    
  }


  startGame() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(TurnsPage);
  }

  cancelGame() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.pop();
  }
 
}
