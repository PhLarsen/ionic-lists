import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SpongeBobPage } from '../sponge-bob/sponge-bob';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data: any;
  posts : any[] = [];
  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.getAllActiveOrders().then(data => {
      this.data = data;
      for(var i = 0; i < this.data.length; i++) {
        var obj = this.data[i];
        this.posts.push(obj);
        
        
    }
    console.log(this.posts);
    });
  }
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
