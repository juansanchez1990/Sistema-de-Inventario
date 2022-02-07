import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TipoEquipo } from '../models/tipos-equipo';

@Injectable({
  providedIn: 'root'
})
export class TiposEquipoService {
  private AppUrl= 'https://localhost:44356/api/Inventario/';
  constructor(private http: HttpClient) {
    this.ObtenerTipoEquipo();
   }
  RegistrarTipoEquipo(tipo:TipoEquipo){
    return this.http.post(this.AppUrl+'RegistrarTipo',tipo)
  }
  ObtenerTipoEquipo(){
    return this.http.get<TipoEquipo[]>(this.AppUrl+'ObtenerTiposEquipos')
  }
  BorrarTipoEquipo(tipo:TipoEquipo){
    return this.http.put(this.AppUrl+'BorrarTipo',tipo)
  }
}
