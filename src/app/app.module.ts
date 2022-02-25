import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Login } from './login/login.component';
import { Navbar } from './navbar/navbar.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';

import { Registro } from './register/register.component';
import { Inicio } from './inicio/inicio.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@NgModule({
  declarations: [
    AppComponent,
    Login,
    Navbar,
    Registro,
    Inicio
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
