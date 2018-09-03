import { WordpressService } from './../../services/wordpress.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({})
@Component({
  selector: 'page-page-display',
  templateUrl: 'page-display.html',
})
export class PageDisplayPage {
  id: number;
  constructor(public navCtrl: NavController,
               public navParams: NavParams,
              public wordpressService: WordpressService) {
   
  this.id = this.navParams.get('id');              
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageDisplayPage');
  }


  ionViewDidEnter(){
   this.wordpressService.getpage(this.id).subscribe((page)=>{
     console.log(page);
   });
  }
}
