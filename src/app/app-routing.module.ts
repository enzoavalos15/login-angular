import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { Login } from './login/login.component';
import { Inicio } from './inicio/inicio.component';
import { Registro } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: Inicio,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'registro',
    component: Registro
  },
  {
    path:'**',
    redirectTo:''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
