import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { homeRouting } from './home.routes';
import { SocialChannelComponent } from './social-channel/social-channel.component';
import { OnlineContactComponent } from './online-contact/online-contact.component';
import { SitestatComponent } from './sitestat/sitestat.component';

@NgModule({
  imports: [
    CommonModule,
    homeRouting
  ],
  declarations: [HomeComponent, SocialChannelComponent, OnlineContactComponent, SitestatComponent],
  exports: []
})
export class HomeModule { }
