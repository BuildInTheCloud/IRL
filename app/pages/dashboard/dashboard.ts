
import { Component } from '@angular/core';
import {DomSanitizationService} from '@angular/platform-browser';
import { NavController } from 'ionic-angular';
import { StaticService } from '../../static-service/static-data';

@Component({
  templateUrl: 'build/pages/dashboard/dashboard.html',
  providers: [StaticService]
})

export class DashboardPage {
  itemList:any[];
  errorMessage: string;

  constructor(private navCtrl: NavController, private dataService: StaticService, private sanitizer: DomSanitizationService) { }

  ngOnInit() {

  }

}
