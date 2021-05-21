import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isAuthenticated: boolean = false;
  constructor(private keycloakService: KeycloakService) { }

  ngOnInit(): void {
   this.keycloakService.isLoggedIn().then( (isLoggedIn) =>
     this.isAuthenticated = isLoggedIn
   );
  }

}
