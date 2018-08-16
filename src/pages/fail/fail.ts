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

  constructor(public navCtrl: NavController, public navParams: NavParams) {  
    this.callback = this.navParams.get('callback');
  }
  
  nextturn() {    
    this.callback().then( () => { this.navCtrl.pop() });
  }
}
