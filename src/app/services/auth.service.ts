import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  //login a firebase con email y password
  async login(email: string, password: string){
    try{
      return await this.afAuth.signInWithEmailAndPassword(email, password)
    } catch (err){

      console.log('error al loguear', err);
      
      return null
      
    }
  }

  //registro de usuario en firebase con email y password
  async register(email: string, password: string){
    try{
      return await this.afAuth.createUserWithEmailAndPassword(email, password);
    } catch (err){

      console.log('error al registrar', err);
      return null     
    }
  }

  getUserLogged(){
    return this.afAuth.authState;
  }

  logout(){
    this.afAuth.signOut();
  }


}
