import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { WordpressService } from './../../services/wordpress.service';
import { PostPage } from '../post/post';


@IonicPage({})
@Component({
  selector: 'page-post-by-category',
  templateUrl: 'post-by-category.html',
})
export class PostByCategoryPage {

  catId: number;
  cat: object;
  posts: any;
  page:number;
  morePagesAvailable: boolean = true;
  categoryID: number;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public wordpressService: WordpressService) {
      
  this.catId = this.navParams.get('catId'); 
  this.cat= this.navParams.get('cat');  
  
  console.log(this.cat);
}

ionViewDidLoad(){
  this.wordpressService.getPostsByCategory(this.catId).subscribe((data)=>{
    console.log(data);
    if(data == null) {
      alert("No data found")
    }
    else {
      this.posts= data;
      console.log(this.posts);
    }
  })
  }

  openPost(post: Object) {
    console.log(post);
    this.navCtrl.push('PostPage',{post: post});
  }

  doInfinite(event: Event) {
    if(event) {
      this.page++;
    }
    this.wordpressService.getPosts(this.page).subscribe((data)=>{
      this.posts = this.posts.concat(data);
    })
  }
}

