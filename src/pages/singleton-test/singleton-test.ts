import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RngProvider } from '../../providers/rng/rng';

/**
 * Generated class for the SingletonTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-singleton-test',
  templateUrl: 'singleton-test.html',
  providers:[RngProvider]
})
export class SingletonTestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public rngProvider: RngProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingletonTestPage');
    this.rngProvider.log();
  }

}
