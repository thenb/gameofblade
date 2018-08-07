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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewGamePage,
    TricksPage,
    TurnsPage,
    GotitPage,
    FailPage,
    GameoverPage
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
    GameoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
