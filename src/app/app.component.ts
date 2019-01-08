import { Component } from '@angular/core';
import { Platform, Toast } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';
import { HomePage } from '../pages/home/home';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public network: Network, public alertCtrl: AlertController, public toastCtrl: ToastController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

     this.network.onDisconnect().subscribe(response => {
       console.log("HALLØJSA " + response.type);
       this.showToast();
     })


    this.network.onConnect().subscribe(() => {
      console.log('network connected!');
      // We just got a connection but we need to wait briefly
       // before we determine the connection type. Might need to wait.
      // prior to doing any api requests as well.
      setTimeout(() => {
        if (this.network.type === 'ethernet') {
          console.log('we got a ethernet connection, woohoo!');
        }
      }, 3000);
      
    }
    
    );
    
  }


  showToast() {
    const toast = this.toastCtrl.create({
      message: 'disconnected',
      position: "top",
      duration: 3000
    });
    toast.present();
  }
 

}

