import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent,
    ProductDetailComponent
  ],
  imports: [
    ProductsRoutingModule, 
    SharedModule,
    CommonModule
  ]
})
export class ProductsModule {

}