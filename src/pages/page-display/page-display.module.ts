import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageDisplayPage } from './page-display';

@NgModule({
  declarations: [
    PageDisplayPage,
  ],
  imports: [
    IonicPageModule.forChild(PageDisplayPage),
  ],
})
export class PageDisplayPageModule {}
