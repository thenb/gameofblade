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

  private player_turn_index : number;
  private blade : any;
  private callback : any;
  private turn : any;
  private player_1_name : any;
  private player_2_name : any;
  private player_3_name : any;
  private player_4_name : any;
  private player_1_status : any;
  private player_2_status : any;
  private player_3_status : any;
  private player_4_status : any;
  private player_status: any

  private players: any;
  private players_count: any;
  private actual_player: number;
  private player_turn : any;

  private round: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {    
    this.trick = this.navParams.get('trick');
    this.blade = ['B', 'L', 'A', 'D', 'E'];    
    this.player_1_name = window.localStorage.getItem('player_1_name');    
    this.player_1_status = window.localStorage.getItem('player_1_status');
    this.player_2_name = window.localStorage.getItem('player_2_name');
    this.player_2_status = window.localStorage.getItem('player_2_status');
    this.player_3_name = window.localStorage.getItem('player_3_name');
    this.player_3_status = window.localStorage.getItem('player_3_status');
    this.player_4_name = window.localStorage.getItem('player_4_name');
    this.player_4_status = window.localStorage.getItem('player_4_status');
    this.turn = window.localStorage.getItem('turn_number');
    this.players = [];

    if(this.player_1_name != 'undefined' && this.player_1_name != '' && this.player_1_name != null){
      this.players[0] = {name:this.player_1_name, status:this.player_1_status, number:0};
    }
    if(this.player_2_name != 'undefined' && this.player_2_name != '' && this.player_2_name != null){
      this.players[1] = {name:this.player_2_name, status:this.player_2_status, number:1};
    }
    if(this.player_3_name != 'undefined' && this.player_3_name != '' && this.player_3_name != null){
      this.players[2] = {name:this.player_3_name, status:this.player_3_status, number:2};
    }
    if(this.player_4_name != 'undefined' && this.player_4_name != '' && this.player_4_name != null){
      this.players.push({name:this.player_4_name, status:this.player_4_status, number:3})
    } 
    this.actual_player = 0;
    this.players_count = this.players.length;
    this.nextPlayer();
  }

  failTrick() {
    this.players[this.actual_player].status++;
    //alert(this.players[this.actual_player].status);
    if(this.players[this.actual_player].number==0){
      this.player_1_status = this.players[this.actual_player].status;
      window.localStorage.setItem('player_1_status', this.player_1_status);
    }
    if(this.players[this.actual_player].number==1){
      this.player_2_status = this.players[this.actual_player].status;
      window.localStorage.setItem('player_2_status', this.player_2_status);
    }
    if(this.players[this.actual_player].number==2){
      this.player_3_status = this.players[this.actual_player].status;
      window.localStorage.setItem('player_3_status', this.player_3_status);
    }
    if(this.players[this.actual_player].number==3){
      this.player_4_status = this.players[this.actual_player].status;
      window.localStorage.setItem('player_4_status', this.player_4_status);
    }    
    this.actual_player++; 
    this.nextPlayer();
  }

 gotTrick() {
  this.actual_player++;    
  this.nextPlayer();
 }

  nextPlayer() {
    //se acabou o ultimo jogador do turno
    if(this.actual_player<this.players_count){
    //enquato nao acaba o turno
    this.player_turn = this.players[this.actual_player];
   // alert(this.actual_player);
   
    }else{
      if(this.checkWinner()){
        this.navCtrl.push(GameoverPage)
      }else{
        this.turn++;
        window.localStorage.setItem('turn_number', this.turn);
        this.navCtrl.pop();
      }
    }
    




    /*if(this.player_turn_index < this.player_status.length){
      this.player_turn = this.player_status[this.player_turn_index];
      this.player_turn_index++;
      if(this.player_status == 'BLADE'){
        this.nextPlayer();
      }
    }else{
      if(this.checkWinner()){
        this.navCtrl.push(GameoverPage)
      }else{
        
      }    
    }*/

  }

  checkWinner() {
    let players = 0;
    let msg_victory = "";
    this.players.forEach(player => {      
      if(player.status != 5){
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
