import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SpongeBobPage } from '../pages/sponge-bob/sponge-bob';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {TestInterceptor} from '../TestInterceptor';
import { RngProvider } from '../providers/rng/rng';
import { SingletonTestPage } from '../pages/singleton-test/singleton-test';
import { Network } from '@ionic-native/network';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
@NgModule({
  declarations: [
    MyApp,
    HomePage, SpongeBobPage, SingletonTestPage
  ],
  imports: [
    BrowserModule, HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, SpongeBobPage, SingletonTestPage
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TestInterceptor,
      multi: true
    },

    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RngProvider, Network, BarcodeScanner
  ]
})
export class AppModule {}
