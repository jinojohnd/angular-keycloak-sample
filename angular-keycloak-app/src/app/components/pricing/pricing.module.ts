import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { pricingRoutes } from './pricing.routes';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(pricingRoutes)
  ]
})
export class PricingModule { }
