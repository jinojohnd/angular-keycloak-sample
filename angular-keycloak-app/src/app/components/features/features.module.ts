import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { featuresRoutes } from './features.routes';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(featuresRoutes)
  ]
})
export class FeaturesModule { }
