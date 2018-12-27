import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpongeBobPage } from './sponge-bob';

@NgModule({
  declarations: [
    SpongeBobPage,
  ],
  imports: [
    IonicPageModule.forChild(SpongeBobPage),
  ],
})
export class SpongeBobPageModule {}
