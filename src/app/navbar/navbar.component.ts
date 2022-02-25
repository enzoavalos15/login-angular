import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class Navbar {

  constructor( private authService: AuthService) { }

  //si el usuario esta logueado cambia las opciones de login y register por logout y el mail del usuario
  userLogged = this.authService.getUserLogged();

  logout(){
    this.authService.logout();
  }

}
