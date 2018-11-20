import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FailPage } from '../fail/fail';
import { GotitPage } from '../gotit/gotit';
import { GameoverPage } from '../gameover/gameover';
import { TurnsPage } from '../turns/turns';
import { TricksPage } from '../tricks/tricks';
import { IconServiceDirective } from '../../directives/icon-service/icon-service';

@Component({
  selector: 'page-validate',
  templateUrl: 'validate.html'
})
export class ValidatePage {  
  private trick : string;
  private player_turn_index : number;
  private callback : any;
  private turn : any;
  private player_status: any;
  private players: any;
  private players_count: any;
  private returning: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private iconService: IconServiceDirective) {    
   
    this.trick = window.localStorage.getItem('trick');
    this.turn = window.localStorage.getItem('turn_number');
    this.players = JSON.parse( window.localStorage.getItem('players'));    
    this.players.forEach(p => {     
      p.trick = true;
    });
     
  }

  nextRound() {
    if(this.checkWinner()){
      this.navCtrl.push(GameoverPage)
    }else{        
      this.navCtrl.push(TricksPage)
    }  
  }  


  checkWinner() {

    this.players.forEach(p => {     
      //Se status menor que 5, jogador ainda está no jogo 
      if(p.trick == false){
        p.status++;  
        p.icon = this.iconService.getIcon(p.color, p.status);
      }
    });


    let player = 0;
    let msg_victory = "";
    this.players.forEach(p => {     
      //Se status menor que 5, jogador ainda está no jogo 
      if(p.status < 5){
        player++;        
        msg_victory = msg_victory.concat( ' '+p.name+' '); 
      }
    });    

    //Se numero de players no jogo é 0, quer dizer que ninguem ganhou
    if(player==0){
      msg_victory= 'Nobody';        
    }
    
    window.localStorage.setItem('players', JSON.stringify(this.players));

    // Se foi maior que 1, ainda tem mais rodadas, caso seja 1, tem um vencedor
    if(player > 1){       
      return false;
    }else{
      window.localStorage.setItem('msg_victory', msg_victory);
      return true;
    }
  } 

  updateTrick(player: any){
    if(player.trick == undefined){
      player.trick = true;
    }else{
      player.trick = !player.trick;
    }
  }
  
}
