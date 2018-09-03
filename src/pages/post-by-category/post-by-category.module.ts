import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostByCategoryPage } from './post-by-category';

@NgModule({
  declarations: [
    PostByCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(PostByCategoryPage),
  ],
})
export class PostByCategoryPageModule {}
