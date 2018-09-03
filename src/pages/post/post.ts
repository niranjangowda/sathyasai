import { Component } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { WordpressService } from './../../services/wordpress.service';


@IonicPage({})
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
post: any;
postId: number;
comments: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public WordpressService: WordpressService,
              public socialShare: SocialSharing) {
  
  this.post = this.navParams.get('post');   
  this.postId = this.post.id;

  this.WordpressService.getComments(this.postId).subscribe((data)=>{
    this.comments=data;
    console.log(data);
  })
  }

  shareOnSocialMedia(post: object) {
    console.log("can be shared in whats app");
    this.socialShare.shareViaWhatsApp("",this.post.better_featured_image.source_url,this.post.link);
  }
}