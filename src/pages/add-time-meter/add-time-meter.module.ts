import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTimeMeterPage } from './add-time-meter';

@NgModule({
  declarations: [
    AddTimeMeterPage,
  ],
  imports: [
    IonicPageModule.forChild(AddTimeMeterPage),
  ],
})
export class AddTimeMeterPageModule {}
