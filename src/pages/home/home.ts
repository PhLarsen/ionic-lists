import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SpongeBobPage } from '../sponge-bob/sponge-bob';
import { RngProvider } from '../../providers/rng/rng';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ToastController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data: any;
  posts : any[] = [];
  constructor(public navCtrl: NavController, public http: HttpClient, public rngProvider: RngProvider, public barcodeScanner: BarcodeScanner, public toastCtrl: ToastController) {
    this.getAllActiveOrders().then(data => {
      this.data = data;
      for(var i = 0; i < this.data.length; i++) {
        var obj = this.data[i];
        this.posts.push(obj);
        
        
    }
    console.log(this.posts);
    });
    console.log("Hej opdateret build1");
    console.log("ionViewDidLoad Home");
    this.rngProvider.log();
    this.rngProvider.set("First singleton data");
  }
/*
  ionViewDidLoad(){
    console.log("ionViewDidLoad Home");
    this.rngProvider.log();
    this.rngProvider.set("First singleton data");
  }
  */

  getAllActiveOrders() {
    return new Promise((resolve, reject) => {
      this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(
        response => {
          resolve(response);
          // Grab token with .json().access_token
        },
        err => {
          reject(err);
        }
      );
    });

  }

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      var tmp = barcodeData['text'];
      const toast = this.toastCtrl.create({
        message: tmp,
        position: "top",
        duration: 3000
      });
      toast.present();
     }).catch(err => {
         console.log('Error', err);
     });
  }

  toMemePage(){
    this.navCtrl.push(SpongeBobPage);
    console.log("button pressed");
  }
}




export class Games{
  games: any;
  constructor(public navCtrl: NavController) {
    this.games = ["Spider man", "CS:GO", "League of legends", "Far Cry", "Dota 2",
     "Left for Dead", "Dead by Daylight", "Fortnite", "PUBG", "Golf It", "Hearthstone", "Overwatch", "Paladins", "Destiny 2", "Path of Exile", "SCUM"];

  }
}
