import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderFormComponent } from './project/components/views/order-form/order-form.component';
import { PurchaseordersRegisterComponent } from './project/components/views/purchaseorders-register/purchaseorders-register.component';
import { LoginComponent } from './project/components/views/login/login.component';
import { VisitsListComponent } from './project/components/views/visits-list/visits-list.component';
import { AuthGuard } from './project/module/interfaces/implementation/authGuard';

const routes: Routes = [
  { path: '', component:OrderFormComponent },
  { path:'albarans', component:PurchaseordersRegisterComponent, canActivate: [AuthGuard] },
  { path:'login', component:LoginComponent },
  { path:'admin', component:VisitsListComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
