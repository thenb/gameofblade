import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FailPage } from '../fail/fail';
import { GameoverPage } from '../gameover/gameover';

@Component({
  selector: 'page-turns',
  templateUrl: 'turns.html'
})
export class TurnsPage {  

  private trick : string;
  private game_conf : any;
  private player_status : any;
  private player_turn : any;
  private player_turn_index : number;
  private blade : any;
  private callback : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {    
    this.trick = this.navParams.get('trick');
    this.player_status = this.navParams.get('player_status');
    this.callback = this.navParams.get("callback")
    this.player_turn_index = 0;
    this.blade = ['B', 'L', 'A', 'D', 'E'];
    this.nextPlayer();
  }


  failTrick() {    
    this.player_turn.status += this.blade[this.player_turn.status.length];
    this.nextPlayer();
  }

  gotTrick() {
    this.nextPlayer();

  }

  nextPlayer() {
    if(this.player_turn_index < this.player_status.length){
      this.player_turn = this.player_status[this.player_turn_index];
      this.player_turn_index++;
      if(this.player_status == 'BLADE'){
        this.nextPlayer();
      }
    }else{
      if(this.checkWinner()){
        this.navCtrl.push(GameoverPage)
      }
      //this.callback().then(()=>{
        this.navCtrl.pop();
      //});
    }

  }

  checkWinner() {
    var players = 0;
    this.player_status.forEach(player => {
      if(player.status != 'BLADE'){
        players++;
      }
    });

    if(players > 1){
      return false;
    }else{
      return true;
    }
  }
 
}
