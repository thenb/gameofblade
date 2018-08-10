import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-gameover',
  templateUrl: 'gameover.html'
})
export class GameoverPage {  

  private msg_victory: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {    
    this.msg_victory = window.localStorage.getItem('msg_victory');
  }

  newGame() {    
    this.navCtrl.popToRoot();
  } 
}
