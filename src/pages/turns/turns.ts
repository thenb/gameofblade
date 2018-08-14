import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ValidatePage } from '../validate/validate';
@Component({
  selector: 'page-turns',
  templateUrl: 'turns.html'
})
export class TurnsPage {
  private player_name : any;
  private player_status : any;
  private turn : any;
  private players: any; 
  private actual_player: any;
  private player_turn : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.turn = window.localStorage.getItem('turn_number');
    this.players = JSON.parse( window.localStorage.getItem('players'));    
    this.actual_player = window.localStorage.getItem('actual_player'); 
    this.player_turn = this.players[this.actual_player];   
  }

  startValidate(){
    this.navCtrl.push(ValidatePage);
  }
}
