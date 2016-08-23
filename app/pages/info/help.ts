import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/info/help.html'
})

export class HelpPage {
  entityList:any[];
  errorMessage: string;
  xboxErrorMessage: string;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {

  }

}
