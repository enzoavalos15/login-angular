import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css'],
})
export class Login {

  validaciones = {
    nombre: /^[a-z ]+$/i,
    apellido: /^[a-z ]+$/i,
    email:
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
    password: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}/,
  }

  
  //creacion de las forms control

  emailLoginControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.validaciones.email),
  ]);
  passwordLoginControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.pattern(this.validaciones.password),
  ]);


  //constructor donde observamos los cambios generados en el html y son confirmados despues de 800ms
  constructor() {
    this.emailLoginControl.valueChanges.pipe(debounceTime(800));
    this.passwordLoginControl.valueChanges.pipe(debounceTime(800));

  }

  //carga los datos del usuario a ingresar ------ proxima implementacion hacia un sistema para guardado
  getLogin(e: Event) {
    e.preventDefault();
    console.log(this.emailLoginControl.value);
    console.log(this.passwordLoginControl.value);
  }

  
}
