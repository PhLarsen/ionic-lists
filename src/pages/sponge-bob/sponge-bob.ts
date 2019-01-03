import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RngProvider } from '../../providers/rng/rng';
import { SingletonTestPage } from '../singleton-test/singleton-test';

/**
 * Generated class for the SpongeBobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sponge-bob',
  templateUrl: 'sponge-bob.html',
})
export class SpongeBobPage {
  inputText: string;
  outputText: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public rngProvider: RngProvider) {
  }

  

  generateMemeText(){
    if(this.inputText){
    for (let i = 0; i < this.inputText.length; i++) {
      if(i % 2 == 0){
        this.outputText += this.inputText.charAt(i).toLowerCase();
      }
      else{
        this.outputText += this.inputText.charAt(i).toUpperCase();
      }
    }
  }
  }

  navigateToTestPage(){
    this.navCtrl.push(SingletonTestPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpongeBobPage');
    this.rngProvider.log();
  }

}
