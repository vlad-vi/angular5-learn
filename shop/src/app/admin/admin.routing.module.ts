import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AdminComponent, ProductAdminComponent, AdminDashboardComponent, ManageProductsComponent, ManageOrdersComponent} from '.';
import {AuthGuard} from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {path: 'orders', component: ManageOrdersComponent},
          {path: 'products', component: ManageProductsComponent},
          {path: '', component: AdminDashboardComponent}
        ]
      }
    ]
  }
];

export let adminRouterComponents = [
  AdminComponent,
  AdminDashboardComponent,
  ManageProductsComponent,
  ManageOrdersComponent,
  ProductAdminComponent];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
