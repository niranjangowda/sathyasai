import { WordpressService } from './../../services/wordpress.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, InfiniteScroll } from 'ionic-angular';

import { PostPage } from '../post/post';


@IonicPage({})
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  searchPosts: any;
  searchQuery: string;
  page: number = 1;
  morePagesAvailable: boolean = true;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public wordpressService: WordpressService) {
       
  this.searchQuery = this.navParams.get('query');            
  
  this.wordpressService.getPostsBySearchQuery(this.searchQuery,this.page).subscribe((data)=>{
    this.searchPosts = data;
    console.log(data);
  });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  openPost(post: Object) {
    console.log(post);
    this.navCtrl.push('PostPage',{post: post});
  }

  doInfinite(event: Event) {
    if(event) {
      if(this.searchPosts.length < 0) {
        console.log('no more posts');
      } else 
      this.page++;
    }
    this.wordpressService.getPostsBySearchQuery(this.searchQuery, this.page).subscribe((data)=>{
      this.searchPosts = this.searchPosts.concat(data);
    })
  }
}
