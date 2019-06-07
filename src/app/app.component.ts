import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Minha Conta',
      url: '/list',
      icon: 'md-contact'
    }
    ,
    {
      title: 'Meus pontos',
      url: '/list',
      icon: 'md-trophy'
    },
    {
      title: 'Minha Conta',
      url: '/list',
      icon: 'md-key'
    },
    {
      title: 'Sobre',
      url: '/list',
      icon: 'md-information-circle'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
