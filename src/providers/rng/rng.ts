import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RngProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RngProvider {
  data = "init data";
  constructor(public http: HttpClient) {
    console.log('Hello RngProvider Provider');
  }
  set(data){
    this.data = data;
  }

  log(){
    console.log(this.data);
  }
  generateRandomNumber(){
    return Math.random();
  }

}
