import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  validaciones = {
    nombre: /^[a-z ]+$/i,
    apellido: /^[a-z ]+$/i,
    email:
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
    password: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}/,
  };

  
  emailLoginControl = new FormControl('', [Validators.required, Validators.pattern(this.validaciones.email)]);
  passwordLoginControl = new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(this.validaciones.password)]);
  
  nombreRegistroControl = new FormControl('', [Validators.required, Validators.pattern(this.validaciones.nombre)]);
  apellidoRegistroControl = new FormControl('', [Validators.required, Validators.pattern(this.validaciones.apellido)]);
  emailRegistroControl = new FormControl('', [Validators.required, Validators.pattern(this.validaciones.email)]);
  passwordRegistroControl = new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(this.validaciones.password)]);

  passwordValidate = new FormControl('');

  constructor() {

    this.emailLoginControl.valueChanges
    .pipe(debounceTime(800))
    .subscribe((value) => console.log(value));
  
    this.passwordLoginControl.valueChanges
    .pipe(debounceTime(800))
    .subscribe((value) => console.log(value));


    this.emailRegistroControl.valueChanges
    .pipe(debounceTime(800))
    .subscribe((value) => console.log(value));
    
    this.passwordRegistroControl.valueChanges
    .pipe(debounceTime(800))
    .subscribe((value) => console.log(value));
    
    this.nombreRegistroControl.valueChanges
    .pipe(debounceTime(800))
    .subscribe((value) => console.log(value));

    this.apellidoRegistroControl.valueChanges
    .pipe(debounceTime(800))
    .subscribe((value) => console.log(value));  


    this.passwordValidate.valueChanges
    .pipe(debounceTime(800))
    .subscribe((value) => console.log(value));  
  }

  vistaRegistro:boolean = false;

  irRegistro(){
    this.vistaRegistro = !this.vistaRegistro ;
  }

  getLogin(e: Event) {
    e.preventDefault();
    console.log(this.emailLoginControl.value);
    console.log(this.passwordLoginControl.value);
  }

  getRegistro(e: Event) {
    e.preventDefault();
    console.log(this.nombreRegistroControl.value);
    console.log(this.apellidoRegistroControl.value);
    console.log(this.emailRegistroControl.value);
    console.log(this.passwordRegistroControl.value);
    
    
  }

  compararContrasenias(contra1: string , contra2:string):boolean{
    return contra1 == contra2;
  }


}
