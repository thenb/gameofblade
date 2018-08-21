import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewGamePage } from '../newgame/newgame';

@Component({
  selector: 'page-gotit',
  templateUrl: 'gotit.html'
})
export class GotitPage { 
  
  private callback : any;
  private actual_player: any; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {    
    this.callback = this.navParams.get('callback');
    this.actual_player = this.navParams.get('player');
  }

  nextTurn() {
    this.callback().then( () => { this.navCtrl.pop() });
  }  
}
