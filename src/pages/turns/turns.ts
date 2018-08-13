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
  private player_turn : any;
  private player_turn_index : number;
  private blade : any;
  private callback : any;
  private turn : any;
  private player_1_status : any;
  private player_2_status : any;
  private player_3_status : any;
  private player_4_status : any;
  private player_status: any

  private round: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {    
    this.trick = this.navParams.get('trick');
    this.callback = this.navParams.get("callback")
    this.player_turn_index = 0;
    this.blade = ['B', 'L', 'A', 'D', 'E'];
    this.turn =  window.localStorage.getItem('turn_number');
    this.player_1_status = window.localStorage.getItem('player_1_status');
    this.player_2_status = window.localStorage.getItem('player_2_status');
    this.player_3_status = window.localStorage.getItem('player_3_status');
    this.player_4_status = window.localStorage.getItem('player_4_status');
    this.player_status[this.player_1_status, this.player_2_status, this.player_3_status, this.player_4_status];
    //this.nextPlayer();
  }


  failTrick() {    
    this.player_turn.status += this.blade[this.player_turn.status.length];
    console.log(this.player_turn.status);
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
      }else{
        this.navCtrl.pop();
      }    
    }

  }

  checkWinner() {
    let players = 0;
    let msg_victory = "";
    this.player_status.forEach(player => {      
      if(player.status != 'BLADE'){
        players++;        
        msg_victory = msg_victory.concat( ' '+player.name+' '); 
      }
    });    
    if(players==0){
      msg_victory= 'Nobody';        
    }
    if(players > 1){       
      return false;
    }else{
      window.localStorage.setItem('msg_victory', msg_victory);
      return true;
    }
  }
 
}
