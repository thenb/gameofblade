import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DifficultPage } from '../difficult/difficult';
import { ToastController } from 'ionic-angular';
import { CONTENT } from '../../assets/content/content';
import { AnalyticsDirective } from '../../directives/analytics/analytics';
import { IconServiceDirective, PlayerColors } from '../../directives/icon-service/icon-service';




@Component({
  selector: 'page-newgame',
  templateUrl: 'newgame.html'
})
export class NewGamePage {  

  private player_1_name: string;
  private player_2_name: string;
  private player_3_name: string;
  private player_4_name: string;
  private player_1_status: any;
  private player_2_status: any;
  private player_3_status: any;
  private player_4_status: any;
  private players: any;
  private actual_player: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private ga: AnalyticsDirective, private iconService: IconServiceDirective) {    
    this.player_1_name = '';
    this.player_2_name = '';
    this.player_3_name = '';
    this.player_4_name = ''; 
    this.ga.call('NewGame');
    console.log("teste------------------------------------");
    console.log("Valor: " + PlayerColors.amarelo);
    console.log("------------------------------------------")
  }



  startTrick() {   
    if(this.validateGame()){ 
      if(this.player_1_name != ''){
        window.localStorage.setItem('player_1_name', this.player_1_name); 
        this.player_1_status = 0; 
        window.localStorage.setItem('player_1_status', this.player_1_status);
      } else{
        //Deve zerar, para garantir que não ficou nenhum lixo
        window.localStorage.setItem('player_1_name', undefined); 
        window.localStorage.setItem('player_1_status', undefined);
      } 

      if(this.player_2_name != ''){
        window.localStorage.setItem('player_2_name', this.player_2_name);
        this.player_2_status = 0; 
        window.localStorage.setItem('player_2_status', this.player_2_status);
      }else{
        window.localStorage.setItem('player_2_name', undefined);
        window.localStorage.setItem('player_2_status', undefined);
      }     

      if(this.player_3_name != ''){
        window.localStorage.setItem('player_3_name', this.player_3_name);
        this.player_3_status = 0; 
        window.localStorage.setItem('player_3_status', this.player_3_status);
      }else{
        window.localStorage.setItem('player_3_name', undefined);
        window.localStorage.setItem('player_3_status', undefined);
      }

      if(this.player_4_name != ''){
        window.localStorage.setItem('player_4_name', this.player_4_name);
        this.player_4_status = 0; 
        window.localStorage.setItem('player_4_status', this.player_4_status);
      }else{
        window.localStorage.setItem('player_4_name', undefined);
        window.localStorage.setItem('player_4_status', undefined);
      }   

      this.players = [];
      if(this.player_1_name != 'undefined' && this.player_1_name != '' && this.player_1_name != null){
        this.players.push({name:this.player_1_name, status:1, icon:this.iconService.getIcon(PlayerColors.azul, 1), color: PlayerColors.azul});
        //window.localStorage.setItem('player_1', JSON.stringify(this.players[0]));
      }

      if(this.player_2_name != 'undefined' && this.player_2_name != '' && this.player_2_name != null){
        this.players.push({name:this.player_2_name, status:1, icon:this.iconService.getIcon(PlayerColors.verde, 1), color: PlayerColors.verde});
        //window.localStorage.setItem('player_2', JSON.stringify(this.players[1]));
      }else{

      }

      if(this.player_3_name != 'undefined' && this.player_3_name != '' && this.player_3_name != null){
        this.players.push({name:this.player_3_name, status:1, icon:this.iconService.getIcon(PlayerColors.amarelo, 1), color: PlayerColors.amarelo});
        //window.localStorage.setItem('player_3', JSON.stringify(this.players[2]));
      }else{

      }

      if(this.player_4_name != 'undefined' && this.player_4_name != '' && this.player_4_name != null){
        this.players.push({name:this.player_4_name, status:1, icon:this.iconService.getIcon(PlayerColors.vermelho, 1), color: PlayerColors.vermelho});
        //window.localStorage.setItem('player_4', JSON.stringify(this.players[3]));
      }else{

      }

      this.actual_player = 0;
      //window.localStorage.setItem('actual_player', this.actual_player);    

      window.localStorage.setItem('players', JSON.stringify(this.players));
      this.navCtrl.push(DifficultPage);
    }else{
      this.presentToast(CONTENT.NewGame.erroCampoObrigatorio);
    }
  }

  cancelGame() {   
    //remove the page from the stack and back to home
    this.navCtrl.pop();
  }  

  validateGame() {
    var players = 0;
    if(this.player_1_name.replace(/ /g,'') != ''){
      players++;
    }else{
      this.player_1_name = '';
    }
    if(this.player_2_name.replace(/ /g,'') != ''){
      players++;
    }else{
      this.player_2_name = '';
    }
    if(this.player_3_name.replace(/ /g,'') != ''){
      players++;
    }else{
      this.player_3_name = '';
    }
    if(this.player_4_name.replace(/ /g,'') != ''){
      players++;
    }else{
      this.player_4_name = '';
    }

    if(players>1){
      return true;
    }

    return false;
  }

  presentToast(data) {
    
    let toast = this.toastCtrl.create({
      message: JSON.stringify(data),
      duration: 3000,
      position: 'top',
      cssClass: 'toastCenter'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
