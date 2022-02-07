import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable()
export class RegistroService {
  private AppUrl= 'https://localhost:44356/api/Inventario/';
  constructor(private http: HttpClient) { }

  RegistrarUsuario(usuario:Usuario){
    return this.http.post(this.AppUrl+'RegistrarUsuario',usuario)
  }
}
