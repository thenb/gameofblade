import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TricksPage } from '../tricks/tricks';

@Component({
  selector: 'page-loading-game',
  templateUrl: 'loading-game.html'
})
export class LoadingPage {  

  private level: string;  
  private player_status: any;
  private turn: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  startTrick() {    
    this.navCtrl.push(TricksPage);
  }

}
