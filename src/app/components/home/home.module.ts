import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule
  ]
})
export class HomeModule {

}