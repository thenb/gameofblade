import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TurnsPage } from '../turns/turns';
import { CONTENT } from '../../assets/content/content';

@Component({
  selector: 'page-tricks',
  templateUrl: 'tricks.html'
})
export class TricksPage {  

  private trick : string;
  private trick_list : any;
  private level : any;
  private player_1_status : any;
  private player_2_status : any;
  private player_3_status : any;
  private player_4_status : any;
  private turn : any;
  private count_tricks : number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {    
    this.trick = '';
    this.count_tricks = 0;   
    this.level = window.localStorage.getItem('level');  
    if(this.level == 'easy'){
      this.trick_list = Object.assign([], CONTENT.easy_tricks);
    }else if(this.level == 'moderate'){
      this.trick_list = Object.assign([], CONTENT.moderate_tricks);
    }else if(this.level == 'difficult'){
      this.trick_list = Object.assign([], CONTENT.hard_tricks);
    }  
  }

  startTurn() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //let turn_number = +window.localStorage.getItem('turn_number');
   // this.turn = turn_number++;
   // window.localStorage.setItem('turn_number', turn_number.toString());
    this.navCtrl.push(TurnsPage, {trick: this.trick});
    this.count_tricks = 0;
  }

  cancelGame() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.pop();
  }

  changeTrick() {
    if(this.trick_list.length == 1){
      if(this.level == 'easy'){
        this.trick_list = Object.assign([], CONTENT.easy_tricks);
      }else if(this.level == 'moderate'){
        this.trick_list = Object.assign([], CONTENT.moderate_tricks);
      }else if(this.level == 'hard'){
        this.trick_list = Object.assign([], CONTENT.hard_tricks);
      }
    }
    var key = Math.floor(Math.random() * this.trick_list.length);
    this.trick = this.trick_list[key];
    this.trick_list.splice(key, 1);
    this.count_tricks++;
  }

  ionViewDidEnter() {
    this.turn = window.localStorage.getItem('turn_number');
  }
 
}
