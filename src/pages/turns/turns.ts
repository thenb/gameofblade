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
  private turn : any;

  private round: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {    
    this.trick = this.navParams.get('trick');
    this.player_status = this.navParams.get('player_status');
    this.callback = this.navParams.get("callback")
    this.player_turn_index = 0;
    this.blade = ['B', 'L', 'A', 'D', 'E'];
    this.turn =  window.localStorage.getItem('turn_number');
    this.nextPlayer();
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
    alert(this.player_status);
    if(this.player_status == 'BLADE'){
      this.player_turn = this.player_status[this.player_turn_index];
      this.player_turn_index++;
      this.nextPlayer();
    }else{
      if(this.player_turn_index < this.player_status.length){
        this.player_turn = this.player_status[this.player_turn_index];
      this.player_turn_index++;
        
      }else{
        if(this.checkWinner()){
          this.navCtrl.push(GameoverPage)
        }else{
          this.navCtrl.pop();
        }    
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
