import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  async login(email: string, password: string){
    try{
      return await this.afAuth.signInWithEmailAndPassword(email, password)
    } catch (err){

      console.log('error al loguear', err);
      return null
     
    }
  }

  async register(email: string, password: string){
    try{
      return await this.afAuth.createUserWithEmailAndPassword(email, password);
    } catch (err){

      console.log('error al registrar', err);
      return null     
    }
  }


}
