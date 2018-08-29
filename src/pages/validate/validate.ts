import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FailPage } from '../fail/fail';
import { GotitPage } from '../gotit/gotit';
import { GameoverPage } from '../gameover/gameover';
import { TurnsPage } from '../turns/turns';
import { TricksPage } from '../tricks/tricks';

@Component({
  selector: 'page-validate',
  templateUrl: 'validate.html'
})
export class ValidatePage {  
  private trick : string;
  private player_turn_index : number;
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
  private player_status: any;
  private players: any;
  private players_count: any;
  private actual_player: any;
  private player_turn : any;
  private returning: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {    
   
    this.trick = window.localStorage.getItem('trick');
    this.player_1_name = window.localStorage.getItem('player_1_name');    
    this.player_1_status = window.localStorage.getItem('player_1_status');
    this.player_2_name = window.localStorage.getItem('player_2_name');
    this.player_2_status = window.localStorage.getItem('player_2_status');
    this.player_3_name = window.localStorage.getItem('player_3_name');
    this.player_3_status = window.localStorage.getItem('player_3_status');
    this.player_4_name = window.localStorage.getItem('player_4_name');
    this.player_4_status = window.localStorage.getItem('player_4_status');
    this.turn = window.localStorage.getItem('turn_number');
    this.players = JSON.parse( window.localStorage.getItem('players'));    
    this.actual_player = window.localStorage.getItem('actual_player'); 
    this.players_count = this.players.length;
    this.player_turn = this.players[this.actual_player];   
     
  }

  failTrick() {
    this.players[this.actual_player].status++;
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

    /*if(this.actual_player<=this.players_count){
      this.actual_player++; 
    }else{
      this.actual_player=0;
    }
    window.localStorage.setItem('actual_player', this.actual_player);*/
    window.localStorage.setItem('players', JSON.stringify(this.players));  
    //window.localStorage.setItem('actual_player', this.actual_player);
    this.navCtrl.push(FailPage,
      {         
          callback: this.getData,
          player: this.player_turn
      });
  }  

 gotTrick() {
  /*if(this.actual_player<=this.players_count){
    this.actual_player++; 
  }else{
    this.actual_player=0;
  } 
  window.localStorage.setItem('actual_player', this.actual_player);  */
  this.navCtrl.push(GotitPage,
    {         
        callback: this.getData,
        player: this.player_turn
    });
 }

 getData = data =>
  {
    return new Promise((resolve, reject) => {
      this.nextPlayer();
    }).catch(err => {
      throw new Error(err);
    });
  };

  nextPlayer() {
    this.actual_player++;
    window.localStorage.setItem('actual_player', this.actual_player);
    //se acabou o ultimo jogador do turno
    if(this.actual_player <= this.players_count && this.players[this.actual_player] != undefined  && this.players[this.actual_player] != null){
      //Verifica se próximo player ainda está jogando e seleciona o próximo jogador apto a jogar
      if(this.players[this.actual_player].status >= 5){
        this.actual_player++;
        alert("primeiro add: " + this.actual_player );
        while(this.actual_player <= this.players_count && this.players[this.actual_player] != undefined  && this.players[this.actual_player] != null && this.players[this.actual_player].status >= 5){
          this.actual_player++;
        }
        window.localStorage.setItem('actual_player', this.actual_player);

        alert("depois while: " + this.actual_player );
        if(this.actual_player > this.players_count){
          if(this.checkWinner()){
            this.navCtrl.push(GameoverPage)
          }else{
            this.getFirstPlayer();
    
            this.turn++;
            window.localStorage.setItem('turn_number', this.turn);
            window.localStorage.setItem('actual_player', this.actual_player);
            this.navCtrl.push(TricksPage)
          }
        }else{
          alert("chama turn: " + this.players[this.actual_player].name );
          //enquato nao acaba o turno
          this.player_turn = this.players[this.actual_player];
          this.navCtrl.push(TurnsPage) 
        }

      }else{
        //enquato nao acaba o turno
        this.player_turn = this.players[this.actual_player];
        this.navCtrl.push(TurnsPage) 
      }

    }else{
      if(this.checkWinner()){
        this.navCtrl.push(GameoverPage)
      }else{
        this.getFirstPlayer();

        this.turn++;
        window.localStorage.setItem('turn_number', this.turn);
        //this.actual_player = 0;
        window.localStorage.setItem('actual_player', this.actual_player);
        this.navCtrl.push(TricksPage)
      }
    }
  }

  checkWinner() {
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
    
    // Se foi maior que 1, ainda tem mais rodadas, caso seja 1, tem um vencedor
    if(player > 1){       
      return false;
    }else{
      window.localStorage.setItem('msg_victory', msg_victory);
      return true;
    }
  } 

  //Pega o primeiro 
  getFirstPlayer(){
    let validateNextPlayer = false;
    let count = 0;
    this.players.forEach(p => {     
      if(p.status >= 5 && !validateNextPlayer){
        count++;      
      }else{
        validateNextPlayer = true;
      }
    }); 
    this.actual_player = count;
    
  }

  
}
