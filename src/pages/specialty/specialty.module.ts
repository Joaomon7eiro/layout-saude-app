import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpecialtyPage } from './specialty';

@NgModule({
  declarations: [
    SpecialtyPage,
  ],
  imports: [
    IonicPageModule.forChild(SpecialtyPage),
  ],
})
export class SpecialtyPageModule {}
