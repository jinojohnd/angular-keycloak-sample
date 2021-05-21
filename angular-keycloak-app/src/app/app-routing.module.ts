import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'features', loadChildren: () => import('./components/features/features.module').then(mod => mod.FeaturesModule)
  },
  {
    path: 'pricing', loadChildren: () => import('./components/pricing/pricing.module').then(mod => mod.PricingModule), 
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
