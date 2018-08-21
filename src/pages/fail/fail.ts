import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GameoverPage } from '../gameover/gameover';
import { ValidatePage } from '../validate/validate';

@Component({
  selector: 'page-fail',
  templateUrl: 'fail.html'
})
export class FailPage { 
  
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
