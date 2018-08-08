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
  private game_conf : any

  constructor(public navCtrl: NavController, public navParams: NavParams) {    
    this.trick = '';
    this.trials = 0;

    this.game_conf = this.navParams.get('game_conf');

    if(this.game_conf.level == 'easy'){
      this.trick_list = Object.assign([], CONTENT.easy_tricks);
    }else if(this.game_conf.level == 'moderate'){
      this.trick_list = Object.assign([], CONTENT.moderate_tricks);
    }else if(this.game_conf.level == 'hard'){
      this.trick_list = Object.assign([], CONTENT.hard_tricks);
    }

    var key = Math.floor(Math.random() * this.trick_list.length);
    this.trick = this.trick_list[key];
    this.trick_list.splice(key, 1);

  }


  startGame() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(TurnsPage);
  }

  cancelGame() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.pop();
  }

  changeTrick() {
    if(this.trick_list.length == 1){
      if(this.game_conf.level == 'easy'){
        this.trick_list = Object.assign([], CONTENT.easy_tricks);
      }else if(this.game_conf.level == 'moderate'){
        this.trick_list = Object.assign([], CONTENT.moderate_tricks);
      }else if(this.game_conf.level == 'hard'){
        this.trick_list = Object.assign([], CONTENT.hard_tricks);
      }
    }
    var key = Math.floor(Math.random() * this.trick_list.length);
    this.trick = this.trick_list[key];
    this.trick_list.splice(key, 1);
    this.trials++;
  }
 
}
