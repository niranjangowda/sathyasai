import { Component, Injectable, ViewChild } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AlertController, LoadingController, NavController, Platform, MenuController } from 'ionic-angular';

import { WordpressService } from './../services/wordpress.service';

@Component({
  templateUrl: 'app.html'
})

@Injectable()
export class MyApp {
  @ViewChild('nav') nav:NavController
  rootPage:any = 'HomePage';
  categories: any;
  iscategoriesDataAvailable: boolean = false;

  constructor(platform: Platform, statusBar: StatusBar,
		splashScreen: SplashScreen,
    private oneSignal: OneSignal,
    public alertCntrl : AlertController,
    public wordpressService: WordpressService,
    public loadCntrl: LoadingController,
    public menuCntrl: MenuController) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      const load = this.loadCntrl.create({
        content: 'cargando....',
        spinner: 'crescent',
        duration: 3500
      });

      load.present();

	this.oneSignal.startInit('a362352f-d799-4102-b6ac-464d96a9e2e5', '678160024264');

	this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

	this.oneSignal.handleNotificationReceived().subscribe((data) => {
    //do something when notification is received
    
  console.log(data);

	});

	this.oneSignal.handleNotificationOpened().subscribe((data) => {
    // do something when a notification is opened
    const alert = alertCntrl.create({
      title: ' A push notification is arrived',
      message: 'Thank you for reading',
      buttons: ['ok']
    });

    alert.present();

    console.log(data);

	});

  	this.oneSignal.endInit();

    });

    this.wordpressService.getCategories().subscribe((data)=>{
    this.categories = data;
    });
  }

  openPostCategory(catId: number, cat: object) {
   // console.log(cat);
   this.iscategoriesDataAvailable = true;
    this.nav.push('PostByCategoryPage',{cat: cat,catId: catId});
    this.menuCntrl.close();
  }


  
  // openPage(page: string) {
  //   switch(page) {
  //     case "que-es-la-organizacion-sathya-sai": this.nav.setRoot(PageDisplayPage,{id: 1522});
  //     }
  // }


}



