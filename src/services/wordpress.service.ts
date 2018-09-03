import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WordpressService {
    


constructor(private http: HttpClient) {
}

getPosts(page: number) {
     return this.http.get('http://www2.sathyasai.es/wp-json/wp/v2/posts?page=' + page).map(res =>{
         //console.log(res); 
         if(res != null){
         }
          return res;
    });
}

getpage(id: number) {
   return this.http.get('http://www2.sathyasai.es/wp-json/wp/v2/pages/id=' + id).map((page)=>{
        return page;
    });
}

getCategories() {
    return this.http.get('http://www2.sathyasai.es/wp-json/wp/v2/categories').map((categories)=>{
        if(categories != null) {
        }
        return categories;
    });
}

getPostsByCategory(catId: number){
    return this.http.get('http://www2.sathyasai.es/wp-json/wp/v2/posts?categories=' + catId).map((categories)=>{
        return categories;
    });
}

getComments(postId) {
    return this.http.get('http://www2.sathyasai.es/wp-json/wp/v2/comments?post=' + postId).map((comments)=>{
        return comments;
    })
}

getPostsBySearchQuery(query: string, page: number) {
  return this.http.get('http://www2.sathyasai.es/wp-json/wp/v2/posts?search=' + query + '&page=' + page).map(res=>{
      return res
  }); 
 }
}