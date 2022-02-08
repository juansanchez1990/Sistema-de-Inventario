import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TipoEquipo } from '../../tipos-equipo/models/tipos-equipo';
import { Equipo } from '../models/equipo';
@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  private AppUrl= 'https://localhost:44356/api/Inventario/';
  constructor(private http: HttpClient) { 

    this.ObtenerMarcas();
    this.ObtenerTipoEquipo();

  }
  ObtenerMarcas(){
    return this.http.get(this.AppUrl+'ObtenerMarcas')
  }
  ObtenerTipoEquipo(){
    return this.http.get<TipoEquipo[]>(this.AppUrl+'TiposEquipos')
  }
  ObtenerEquipos(){
    return this.http.get<Equipo[]>(this.AppUrl+'ObtenerEquipos')
  }

  GuardarEquipo(Equipo:Equipo){
    return this.http.post(this.AppUrl+'RegistrarEquipo',Equipo)
  }

}
