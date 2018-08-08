import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-gameover',
  templateUrl: 'gameover.html'
})
export class GameoverPage {  

  private msg_victory: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {    
    window.localStorage.setItem('turn_number', '0');
    this.msg_victory = window.localStorage.getItem('msg_victory');

  }

  newGame() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.popToRoot();
  } 
}
