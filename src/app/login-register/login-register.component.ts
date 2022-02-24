import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['../app.component.css'],
})
export class LoginRegister {
  //validaciones con expresiones regulares
  validaciones = {
    nombre: /^[a-z ]+$/i,
    apellido: /^[a-z ]+$/i,
    email:
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
    password: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}/,
  };

  //creacion de las forms control
  //lado login
  emailLoginControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.validaciones.email),
  ]);
  passwordLoginControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.pattern(this.validaciones.password),
  ]);
  //lado registro
  nombreRegistroControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.validaciones.nombre),
  ]);
  apellidoRegistroControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.validaciones.apellido),
  ]);
  emailRegistroControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.validaciones.email),
  ]);
  passwordRegistroControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.pattern(this.validaciones.password),
  ]);

  //para confirmar la contraseña en el registro
  passwordValidate = new FormControl('');

  //constructor donde observamos los cambios generados en el html y son confirmados despues de 800ms
  constructor() {
    this.emailLoginControl.valueChanges.pipe(debounceTime(800));

    this.passwordLoginControl.valueChanges.pipe(debounceTime(800));

    this.emailRegistroControl.valueChanges.pipe(debounceTime(800));

    this.passwordRegistroControl.valueChanges.pipe(debounceTime(800));

    this.nombreRegistroControl.valueChanges.pipe(debounceTime(800));

    this.apellidoRegistroControl.valueChanges.pipe(debounceTime(800));

    this.passwordValidate.valueChanges.pipe(debounceTime(800));
  }

  //booleano para cambiar entre la vista del login y del registo
  vistaRegistro: boolean = false;

  //se activa desde la referencia en el login, cambia el estado entre login y registro
  irRegistro() {
    this.vistaRegistro = !this.vistaRegistro;
  }

  //carga los datos del usuario a ingresar ------ proxima implementacion hacia un sistema para guardado
  getLogin(e: Event) {
    e.preventDefault();
    console.log(this.emailLoginControl.value);
    console.log(this.passwordLoginControl.value);
  }

  //carga los datos del usuario registrado ------ proxima implementacion hacia un sistema para guardado
  getRegistro(e: Event) {
    e.preventDefault();
    console.log(this.nombreRegistroControl.value);
    console.log(this.apellidoRegistroControl.value);
    console.log(this.emailRegistroControl.value);
    console.log(this.passwordRegistroControl.value);
  }

  //metodo para realizar la validacion de contraseñas en el registro
  compararContrasenias(contra1: string, contra2: string): boolean {
    return contra1 == contra2;
  }
}
