import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TricksPage } from '../tricks/tricks';
import { ToastController } from 'ionic-angular';
import { CONTENT } from '../../assets/content/content';

@Component({
  selector: 'page-newgame',
  templateUrl: 'newgame.html'
})
export class NewGamePage {  

  private level: string;
  private player_1: string;
  private player_2: string;
  private player_3: string;
  private player_4: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {    
    this.level = 'easy';
    this.player_1 = '';
    this.player_2 = '';
    this.player_3 = '';
    this.player_4 = '';
  }

  startTrick() {   

    if(this.validateGame()){
      //put the tricks page on the stack and go to page
      var game_conf = {
        level: this.level,
        player_1: this.player_1,
        player_2: this.player_2,
        player_3: this.player_3,
        player_4: this.player_4
      }

      //Call TricksPage with game conf as parameter
      this.navCtrl.push(TricksPage, {game_conf: game_conf});
    }else{
      this.presentToast(CONTENT.NewGame.erroCampoObrigatorio);
    }
  }

  cancelGame() {   
    //remove the page from the stack and back to home
    this.navCtrl.pop();
  }
 
  setEasy() {
    this.level = 'easy';
  }

  setModerate() {
    this.level = 'moderate';
  }

  setHard() {
    this.level = 'hard';
  }

  validateGame() {
    var players = 0;
    if(this.player_1.replace(/ /g,'') != ''){
      players++;
    }
    if(this.player_2.replace(/ /g,'') != ''){
      players++;
    }
    if(this.player_3.replace(/ /g,'') != ''){
      players++;
    }
    if(this.player_4.replace(/ /g,'') != ''){
      players++;
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
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
