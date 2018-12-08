import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddTimeMeterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-time-meter',
  templateUrl: 'add-time-meter.html',
})
export class AddTimeMeterPage {

  public items;
  public item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = ['React', 'Vue', 'Angular', 'Angular X', 'Preact'];
    this.item = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTimeMeterPage');
  }

  showItem() {
    console.log(this.item)
  }

}
