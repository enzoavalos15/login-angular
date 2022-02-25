import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css'],
})
export class Login {

  //validaciones con expresiones regulares
  validaciones = {
    nombre: /^[a-z ]+$/i,
    apellido: /^[a-z ]+$/i,
    email:
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
    password: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}/,
    wallet: /^[a-z0-9]+$/i
  }

  
  //creacion de las forms control y aplicacion de validaciones

  email = new FormControl('', [
    Validators.required,
    Validators.pattern(this.validaciones.email),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.pattern(this.validaciones.password),
  ]);


  constructor(private authService: AuthService) {

  }

  //carga los datos del usuario a ingresar y muestra por consola el objeto si es exitoso
  ingresar() {
 
    console.log(this.email.value);
    console.log(this.password.value);

      this.authService.login(this.email.value, this.password.value).then(res => {
        console.log('', res);
        
      })

  }

  
}
