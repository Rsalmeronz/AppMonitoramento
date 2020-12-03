import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'Home'
    },
    {
      title: 'Paradas',
      url: '/paradas',
      icon: 'people'
    },
    {
      title: 'Indicadores',
      url: '/indicadores',
      icon: 'star'
    },
    {
      title: 'Periodicidade',
      url:  '/folder/Archived',
      icon: 'heart'
    },
    {
      title: 'Relatorio',
      url: '/folder/Trash',
      icon: 'time'
    },
    {
      title: 'Lote',
      url: '/folder/Spam',
      icon: 'warning'
    },
    {
      title: 'Cadastrar Equipamentos',
      url: '/folder/Spam',
      icon: 'chevron-up-circle'
    },
    {
      title: 'Turno',
      url: '/folder/Spam',
      icon: 'trash'
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

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
