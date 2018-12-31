import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { DataService} from './data.service';
import { FormsModule } from '@angular/forms';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LandingpagePage} from '../pages/landingpage/landingpage';
import {ListpagePage} from '../pages/listpage/listpage'

import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from 'angularfire2/firestore';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LandingpagePage,
    ListpagePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LandingpagePage,
    ListpagePage
  ],
  providers: [
    StatusBar,
    DataService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
