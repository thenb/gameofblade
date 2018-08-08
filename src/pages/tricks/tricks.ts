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
  private trials : number;
  private trick_list : any;
  private level : any;
  private player_status : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {    
    this.trick = '';
    this.trials = 0;

    this.level = this.navParams.get('level');

    if(this.level == 'easy'){
      this.trick_list = Object.assign([], CONTENT.easy_tricks);
    }else if(this.level == 'moderate'){
      this.trick_list = Object.assign([], CONTENT.moderate_tricks);
    }else if(this.level == 'hard'){
      this.trick_list = Object.assign([], CONTENT.hard_tricks);
    }

    var key = Math.floor(Math.random() * this.trick_list.length);
    this.trick = this.trick_list[key];
    this.trick_list.splice(key, 1);

    this.player_status = this.navParams.get('player_status');
  }


  callBack = function(_params) {
    return new Promise((resolve, reject) => {
              this.changeTrick();
              this.trials = 0;
              resolve();
          });
  }

  startGame() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(TurnsPage, {trick: this.trick, player_status: this.player_status, callBack : this.callBack});
    this.changeTrick();
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
    //this.trials++;
  }
 
}
