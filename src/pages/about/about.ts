import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public nativePageTransitions:NativePageTransitions) {

  }

  pushSpecialty () : void {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 500,
      slowdownfactor: 3,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 150,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 60
     };

    this.nativePageTransitions.slide(options)
    this.navCtrl.push('SpecialtyPage');
  }

  logout () : void {
    this.navCtrl.setRoot('LoginPage')
  }
}
