import { Directive } from '@angular/core';

export enum PlayerColors{
  verde = "verde",
  amarelo = "amarelo",
  azul = "azul",
  vermelho = "vermelho"

}

enum IconUrl{
  verde_0 = "../../assets/emoji/48x48/@1x/green/zzz.png",
  verde_1 = "../../assets/emoji/48x48/@1x/green/happy.png",
  verde_2 = "../../assets/emoji/48x48/@1x/green/pleased.png",
  verde_3 = "../../assets/emoji/48x48/@1x/green/flushed.png",
  verde_4 = "../../assets/emoji/48x48/@1x/green/scared.png",
  verde_5 = "../../assets/emoji/48x48/@1x/green/cry.png",
  verde_6 = "../../assets/emoji/48x48/@1x/green/shocked.png",
  amarelo_0 = "../../assets/emoji/48x48/@1x/yellow/zzz.png",
  amarelo_1 = "../../assets/emoji/48x48/@1x/yellow/happy.png",
  amarelo_2 = "../../assets/emoji/48x48/@1x/yellow/pleased.png",
  amarelo_3 = "../../assets/emoji/48x48/@1x/yellow/flushed.png",
  amarelo_4 = "../../assets/emoji/48x48/@1x/yellow/scared.png",
  amarelo_5 = "../../assets/emoji/48x48/@1x/yellow/cry.png",
  amarelo_6 = "../../assets/emoji/48x48/@1x/yellow/shocked.png",
  azul_0 = "../../assets/emoji/48x48/@1x/blue/zzz.png",
  azul_1 = "../../assets/emoji/48x48/@1x/blue/happy.png",
  azul_2 = "../../assets/emoji/48x48/@1x/blue/pleased.png",
  azul_3 = "../../assets/emoji/48x48/@1x/blue/flushed.png",
  azul_4 = "../../assets/emoji/48x48/@1x/blue/scared.png",
  azul_5 = "../../assets/emoji/48x48/@1x/blue/cry.png",
  azul_6 = "../../assets/emoji/48x48/@1x/blue/shocked.png",
  vermelho_0 = "../../assets/emoji/48x48/@1x/red/zzz.png",
  vermelho_1 = "../../assets/emoji/48x48/@1x/red/happy.png",
  vermelho_2 = "../../assets/emoji/48x48/@1x/red/pleased.png",
  vermelho_3 = "../../assets/emoji/48x48/@1x/red/flushed.png",
  vermelho_4 = "../../assets/emoji/48x48/@1x/red/scared.png",
  vermelho_5 = "../../assets/emoji/48x48/@1x/red/cry.png",
  vermelho_6 = "../../assets/emoji/48x48/@1x/red/shocked.png",

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
