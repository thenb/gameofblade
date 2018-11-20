import { Directive } from '@angular/core';

export enum PlayerColors{
  verde = "verde",
  amarelo = "amarelo",
  azul = "azul",
  vermelho = "vermelho"

}

enum IconUrl{
  verde_0 = "../../assets/emoji/48x48/@2x/green/zzz@2x.png",
  verde_1 = "../../assets/emoji/48x48/@2x/green/happy@2x.png",
  verde_2 = "../../assets/emoji/48x48/@2x/green/pleased@2x.png",
  verde_3 = "../../assets/emoji/48x48/@2x/green/flushed@2x.png",
  verde_4 = "../../assets/emoji/48x48/@2x/green/scared@2x.png",
  verde_5 = "../../assets/emoji/48x48/@2x/green/cry@2x.png",
  verde_6 = "../../assets/emoji/48x48/@2x/green/shocked@2x.png",
  amarelo_0 = "../../assets/emoji/48x48/@2x/yellow/zzz@2x.png",
  amarelo_1 = "../../assets/emoji/48x48/@2x/yellow/happy@2x.png",
  amarelo_2 = "../../assets/emoji/48x48/@2x/yellow/pleased@2x.png",
  amarelo_3 = "../../assets/emoji/48x48/@2x/yellow/flushed@2x.png",
  amarelo_4 = "../../assets/emoji/48x48/@2x/yellow/scared@2x.png",
  amarelo_5 = "../../assets/emoji/48x48/@2x/yellow/cry@2x.png",
  amarelo_6 = "../../assets/emoji/48x48/@2x/yellow/shocked@2x.png",
  azul_0 = "../../assets/emoji/48x48/@2x/blue/zzz@2x.png",
  azul_1 = "../../assets/emoji/48x48/@2x/blue/happy@2x.png",
  azul_2 = "../../assets/emoji/48x48/@2x/blue/pleased@2x.png",
  azul_3 = "../../assets/emoji/48x48/@2x/blue/flushed@2x.png",
  azul_4 = "../../assets/emoji/48x48/@2x/blue/scared@2x.png",
  azul_5 = "../../assets/emoji/48x48/@2x/blue/cry@2x.png",
  azul_6 = "../../assets/emoji/48x48/@2x/blue/shocked@2x.png",
  vermelho_0 = "../../assets/emoji/48x48/@2x/red/zzz@2x.png",
  vermelho_1 = "../../assets/emoji/48x48/@2x/red/happy@2x.png",
  vermelho_2 = "../../assets/emoji/48x48/@2x/red/pleased@2x.png",
  vermelho_3 = "../../assets/emoji/48x48/@2x/red/flushed@2x.png",
  vermelho_4 = "../../assets/emoji/48x48/@2x/red/scared@2x.png",
  vermelho_5 = "../../assets/emoji/48x48/@2x/red/cry@2x.png",
  vermelho_6 = "../../assets/emoji/48x48/@2x/red/shocked@2x.png",

}

/**
 * Generated class for the IconServiceDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[icon-service]' // Attribute selector
})
export class IconServiceDirective {

  constructor() {
    console.log('Hello IconServiceDirective Directive');
  }

getIcon(color: any, status: number){
  if(color == PlayerColors.verde){
    if(status == 0){
      return IconUrl.verde_0;
    }else if(status == 1){
      return IconUrl.verde_1;
    }else if(status == 2){
      return IconUrl.verde_2;
    }else if(status == 3){
      return IconUrl.verde_3;
    }else if(status == 4){
      return IconUrl.verde_4;
    }else if(status == 5){
      return IconUrl.verde_5;
    }else if(status == 6){
      return IconUrl.verde_6;
    }
  }else if(color == PlayerColors.amarelo){
    if(status == 0){
      return IconUrl.amarelo_0;
    }else if(status == 1){
      return IconUrl.amarelo_1;
    }else if(status == 2){
      return IconUrl.amarelo_2;
    }else if(status == 3){
      return IconUrl.amarelo_3;
    }else if(status == 4){
      return IconUrl.amarelo_4;
    }else if(status == 5){
      return IconUrl.amarelo_5;
    }else if(status == 6){
      return IconUrl.amarelo_6;
    }
  }else if(color == PlayerColors.azul){
    if(status == 0){
      return IconUrl.azul_0;
    }else if(status == 1){
      return IconUrl.azul_1;
    }else if(status == 2){
      return IconUrl.azul_2;
    }else if(status == 3){
      return IconUrl.azul_3;
    }else if(status == 4){
      return IconUrl.azul_4;
    }else if(status == 5){
      return IconUrl.azul_5;
    }else if(status == 6){
      return IconUrl.azul_6;
    }
  }else if(color == PlayerColors.vermelho){
    if(status == 0){
      return IconUrl.vermelho_0;
    }else if(status == 1){
      return IconUrl.vermelho_1;
    }else if(status == 2){
      return IconUrl.vermelho_2;
    }else if(status == 3){
      return IconUrl.vermelho_3;
    }else if(status == 4){
      return IconUrl.vermelho_4;
    }else if(status == 5){
      return IconUrl.vermelho_5;
    }else if(status == 6){
      return IconUrl.vermelho_6;
    }
  }
}

}
