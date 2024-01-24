import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderFormComponent } from './project/components/views/order-form/order-form.component';
import { PurchaseordersRegisterComponent } from './project/components/views/purchaseorders-register/purchaseorders-register.component';

const routes: Routes = [
  {path: '', component:OrderFormComponent},
  {path:'admin', component:PurchaseordersRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
