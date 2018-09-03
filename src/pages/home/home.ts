import { Component } from '@angular/core';
import { LoadingController, NavController, IonicPage } from 'ionic-angular';

import { PostPage } from '../post/post';
import { WordpressService } from './../../services/wordpress.service';
import { SearchPage } from './../search/search';

@IonicPage({})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {


posts: any;
morePagesAvailable: boolean = true;
page: number = 1;
searchQuery: string;
isPostsDataAvailable: boolean = false;


  constructor(public navCtrl: NavController,
              public wordspresservice: WordpressService,
              public loadCntrl: LoadingController) {

  // this.loadCntrl.create({
  //   spinner: 'ios',
  //   content: "please wait",
  //   duration: 3000
  // }).present();
  
  
  this.wordspresservice.getPosts(this.page).subscribe((data)=>{
    this.isPostsDataAvailable = true; 
    this.posts = data;
    console.log(this.posts);
    });
    
  }

  openPost(post: Object) {
    console.log(post);
    this.navCtrl.push('PostPage',{post: post});
  }

  doInfinite(event: Event) {
    if(event) {
      this.page++;
    }
    this.wordspresservice.getPosts(this.page).subscribe((data)=>{
      this.posts = this.posts.concat(data);
    })
  }

  searchPosts(event: Event,query: string) {
    this.navCtrl.push('SearchPage', {query: query})
    // this.navCtrl.push('SearchPage', {query: query})
  }
}

//Added the git implementation