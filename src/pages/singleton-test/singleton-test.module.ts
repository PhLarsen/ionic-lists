import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingletonTestPage } from './singleton-test';

@NgModule({
  declarations: [
    SingletonTestPage,
  ],
  imports: [
    IonicPageModule.forChild(SingletonTestPage),
  ],
})
export class SingletonTestPageModule {}
