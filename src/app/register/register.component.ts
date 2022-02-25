import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RouterEvent, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'registro',
  templateUrl: './register.component.html',
  styleUrls: ['../app.component.css'],
})
export class Registro {

  //validaciones con expresiones regulares
  validaciones = {
    nombre: /^[a-z ]+$/i,
    apellido: /^[a-z ]+$/i,
    email:
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
    password: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}/,
    wallet: /^[a-z0-9]+$/i,
  };


  //creacion de atributos y recepcion con formcontrol mas validaciones

  nombre = new FormControl('', [
    Validators.required,
    Validators.pattern(this.validaciones.nombre),
  ]);
  apellido = new FormControl('', [
    Validators.required,
    Validators.pattern(this.validaciones.apellido),
  ]);
  email = new FormControl('', [
    Validators.required,
    Validators.pattern(this.validaciones.email),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.pattern(this.validaciones.password),
  ]);
  wallet = new FormControl('', [Validators.pattern(this.validaciones.wallet)]);

  //para confirmar la contraseña en el registro
  passwordValidate = new FormControl('');

  constructor(private authService: AuthService) {}


  //Carga al usuario registrado muestra los datos por consola y mensajes de error 
  registrar() {
    console.log(this.nombre.value);
    console.log(this.apellido.value);
    console.log(this.wallet.value);
    console.log(this.email.value);
    console.log(this.password.value);

    this.authService
      .register(this.email.value, this.password.value)
      .then((res) => {
        console.log('Registro con éxito', res);
      });


  }

  //metodo para realizar la validacion de contraseñas en el registro

  compararContrasenias(contra1: string, contra2: string): boolean {
    return contra1 == contra2;
  }

}
