import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {adminRouterComponents, AdminRoutingModule} from './admin.routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    adminRouterComponents
  ]
})
export class AdminModule { }
