import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUsuario } from '../models/loginUsuario';
import { LoginSesion } from '../models/login';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private AppUrl= 'https://localhost:44356/api/Inventario/';
  constructor(private http: HttpClient) { }


  // InicioSesion(dataLogin:any){
  //   return this.http.get<LoginUsuario[]>(this.AppUrl+'IniciarSesion',dataLogin)
  // }

  EnviarUsuario(usuario:LoginUsuario[]){
    console.log('usuario',usuario)
    localStorage.setItem('usuario', JSON.stringify(usuario));

  }

  InicioSesion(usuario:string,password:string){
    return this.http.get<LoginUsuario[]>(this.AppUrl+'IniciarSesion'+'/'+usuario+'/'+password)
  }
}
