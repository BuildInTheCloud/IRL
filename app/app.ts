//declare var Windows: any;
//declare var navigator: any;
declare var cordova;

import { Component, ViewChild, enableProdMode } from '@angular/core';
import { ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { DashboardPage } from './pages/dashboard/dashboard';
import { SearchHuntPage } from './pages/search/hunt';
import { CollectionsOverviewPage } from './pages/collections/overview';
import { LibraryRolodexPage } from './pages/library/rolodex';
import { SocialFriendsPage } from './pages/social/friends';
import { SettingsPage } from './pages/config/settings';
import { HelpPage } from './pages/info/help';
import { AboutPage } from './pages/info/about';

import { SearchTrapPage } from './pages/search/trap';
import { SearchCollectPage } from './pages/search/collect';

@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = DashboardPage;

  pages: Array<{title: string, component: any, params: any }>;

  constructor(private platform: Platform) {
    this.initializeApp();
    this.pages = [
      { title: 'Dashboard', component: DashboardPage, params: {} },
      { title: 'Hunt', component: SearchHuntPage, params: {} },
      { title: 'Collections', component: CollectionsOverviewPage, params: {} },
      { title: 'Library', component: LibraryRolodexPage, params: {} },
      { title: 'Social', component: SocialFriendsPage, params: {} },
      { title: 'Settings', component: SettingsPage, params: {} },
      { title: 'Help', component: HelpPage, params: {} },
      { title: 'About', component: AboutPage, params: {} },

      { title: 'trap', component: SearchTrapPage, params: {entity: 0} },
      { title: 'collect', component: SearchCollectPage, params: {entity: 0} }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      StatusBar.styleDefault();
      //-- camera background
      let tapEnabled = false;
      let dragEnabled = false;
      let toBack = true;
      let rect = {
          x: 0,
          y: 0,
          width: this.platform.width(),
          height: this.platform.height()
      };
      if (cordova.plugins.camerapreview) {
        cordova.plugins.camerapreview.startCamera(rect, "rear", tapEnabled, dragEnabled, toBack);
      }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component, page.params);
  }
}
enableProdMode();
ionicBootstrap(MyApp);
