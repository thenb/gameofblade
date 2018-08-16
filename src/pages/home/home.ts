import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';
import { NewGamePage } from '../newgame/newgame';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;

  private hasResume : any;

  constructor(public navCtrl: NavController) {
    //if theres something on turn number
    let turn_number = window.localStorage.getItem('turn_number');
    if(!turn_number){ 
      let turn_number = '0';
      window.localStorage.setItem('turn_number', turn_number);
    } 
    if(+turn_number!=0){ 
      this.hasResume=true;     
    } 
  }

  startGame() {
    window.localStorage.setItem('player_1_name', 'undefined');
    window.localStorage.setItem('player_1_status', 'undefined');
    window.localStorage.setItem('player_2_name', 'undefined');
    window.localStorage.setItem('player_2_status', 'undefined');
    window.localStorage.setItem('player_3_name', 'undefined');
    window.localStorage.setItem('player_3_name', 'undefined');
    window.localStorage.setItem('player_4_name', 'undefined');
    window.localStorage.setItem('player_4_status', 'undefined');       
    this.navCtrl.push(NewGamePage);
  }

  resumeGame() {
    alert("Not Implemeted");
  }

}
