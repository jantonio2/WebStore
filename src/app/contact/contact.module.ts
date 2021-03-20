import { NgModule } from '@angular/core';

import { ContactComponent } from './components/contact/contact.component';
import { FormComponent } from './components/form/form.component';

import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  declarations: [
    ContactComponent,
    FormComponent
  ],
  imports: [
    ContactRoutingModule
  ]
})
export class ProductsModule {

}