import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NavbarModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    NavbarModule,
    RouterModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class AppNavbarModule { }
