import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderFormComponent } from './project/components/views/order-form/order-form.component';
import { HttpClientModule } from '@angular/common/http';
import { PurchaseordersRegisterComponent } from './project/components/views/purchaseorders-register/purchaseorders-register.component';
import { VisitsListComponent } from './project/components/views/visits-list/visits-list.component';
import { LoginComponent } from './project/components/views/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderFormComponent,
    PurchaseordersRegisterComponent,
    VisitsListComponent,
    LoginComponent
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
