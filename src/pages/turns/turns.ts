import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ValidatePage } from '../validate/validate';
@Component({
  selector: 'page-turns',
  templateUrl: 'turns.html'
})
export class TurnsPage {
  
  private actual_player: any;
  private player_turn : any;
  private player_1_name : any;
  private player_2_name : any;
  private player_3_name : any;
  private player_4_name : any;
  private player_1_status : any;
  private player_2_status : any;
  private player_3_status : any;
  private player_4_status : any;
  private turn : any;
  private players: any; 


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.turn = window.localStorage.getItem('turn_number');
    this.players = JSON.parse( window.localStorage.getItem('players'));    
    this.actual_player = window.localStorage.getItem('actual_player'); 
    this.player_turn = this.players[this.actual_player]; 
    this.player_1_name = window.localStorage.getItem('player_1_name');    
    this.player_1_status = window.localStorage.getItem('player_1_status');
    this.player_2_name = window.localStorage.getItem('player_2_name');
    this.player_2_status = window.localStorage.getItem('player_2_status');
    this.player_3_name = window.localStorage.getItem('player_3_name');
    this.player_3_status = window.localStorage.getItem('player_3_status');
    this.player_4_name = window.localStorage.getItem('player_4_name');
    this.player_4_status = window.localStorage.getItem('player_4_status');
 }

  startValidate(){
    this.navCtrl.push(ValidatePage);
  }
}
