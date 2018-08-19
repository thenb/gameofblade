import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewGamePage } from '../pages/newgame/newgame';
import { TricksPage } from '../pages/tricks/tricks';
import { TurnsPage } from '../pages/turns/turns';
import { GotitPage } from '../pages/gotit/gotit';
import { FailPage } from '../pages/fail/fail';
import { GameoverPage } from '../pages/gameover/gameover';
import { DifficultPage } from '../pages/difficult/difficult';
import { LoadingPage } from '../pages/loading-game/loading-game';
import { ValidatePage } from '../pages/validate/validate';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocialSharing } from '@ionic-native/social-sharing';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewGamePage,
    TricksPage,
    TurnsPage,
    GotitPage,
    FailPage,
    GameoverPage,
    DifficultPage,
    LoadingPage,
    ValidatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewGamePage,
    TricksPage,
    TurnsPage,
    GotitPage,
    FailPage,
    GameoverPage,
    DifficultPage,
    LoadingPage,
    ValidatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
