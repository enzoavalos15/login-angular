import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'registro',
  templateUrl: './register.component.html',
  styleUrls: ['../app.component.css'],
})
export class Registro {

    validaciones = {
        nombre: /^[a-z ]+$/i,
        apellido: /^[a-z ]+$/i,
        email:
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
        password: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}/,
      }
    
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
     constructor() {
    
        this.emailRegistroControl.valueChanges.pipe(debounceTime(800));
    
        this.passwordRegistroControl.valueChanges.pipe(debounceTime(800));
    
        this.nombreRegistroControl.valueChanges.pipe(debounceTime(800));
    
        this.apellidoRegistroControl.valueChanges.pipe(debounceTime(800));
    
        this.passwordValidate.valueChanges.pipe(debounceTime(800));
      }


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
