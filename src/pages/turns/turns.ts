import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FailPage } from '../fail/fail';
import { GotitPage } from '../gotit/gotit';

@Component({
  selector: 'page-turns',
  templateUrl: 'turns.html'
})
export class TurnsPage {  

  private round : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {    
    this.round = 1;
  }


  failTrick() {    
    this.navCtrl.push(FailPage);
  }

  gotTrick() {
    this.navCtrl.push(GotitPage);
  }
 
}
