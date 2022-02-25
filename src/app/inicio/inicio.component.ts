import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['../app.component.css']
})
export class Inicio {

  constructor( private authService: AuthService) { }

  //recibe el usuario logueado
  userLogged = this.authService.getUserLogged();
  
  logout(){
    this.authService.logout();
  }
}
