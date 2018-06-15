import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AboutPage } from '../about/about';

/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  date: string;
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  hourAndMinute : string = ``

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }


  onChange($event) {
    console.log($event);
  }


  cancelSchedule(){
    this.navCtrl.pop()
  }

  confirmSchedule(){
    this.showAlert()
  }

  private showAlert () : void {
    this.alertCtrl.create({
      message: 'Deseja confirmar?',
      buttons: [
          {
              text: 'Sim',
              handler: () => {
                this.navCtrl.setRoot(AboutPage)
              }
          },
          {
              text: 'Não'
          }
      ]
  }).present();
  }


}
