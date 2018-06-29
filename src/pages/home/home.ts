import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {remote, ipcRenderer} from 'electron';
// remote is a bridge to the electron API
// let {dialog} = remote; <- a way to import the dialog feature from electron


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
