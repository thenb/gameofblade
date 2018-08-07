import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TricksPage } from '../tricks/tricks';

@Component({
  selector: 'page-newgame',
  templateUrl: 'newgame.html'
})
export class NewGamePage {  

  constructor(public navCtrl: NavController, public navParams: NavParams) {    
  }

  startTrick() {   
    //put the tricks page on the stack and go to page
    this.navCtrl.push(TricksPage);
  }

  cancelGame() {   
    //remove the page from the stack and back to home
    this.navCtrl.pop();
  }
 
}
