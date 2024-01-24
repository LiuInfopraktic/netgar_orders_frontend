import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderFormComponent } from './project/components/views/order-form/order-form.component';
import { HttpClientModule } from '@angular/common/http';
import { PurchaseordersRegisterComponent } from './project/components/views/purchaseorders-register/purchaseorders-register.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderFormComponent,
    PurchaseordersRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
