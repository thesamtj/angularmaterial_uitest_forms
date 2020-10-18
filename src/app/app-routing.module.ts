import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';

const routes: Routes = [
  { path: '', component: CustomerListComponent, pathMatch: 'full' },
  { path: 'customer-profile', component: CustomerListComponent },
  { path: 'customer-details', component: CustomerDetailsComponent },
  { path: '**', redirectTo: '/customer-profile' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
