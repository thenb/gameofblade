import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TurnsPage } from '../turns/turns';

@Component({
  selector: 'page-gotit',
  templateUrl: 'gotit.html'
})
export class GotitPage {  

  constructor(public navCtrl: NavController, public navParams: NavParams) {    
  }

  nextTurn() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(TurnsPage);
  } 
 
}
