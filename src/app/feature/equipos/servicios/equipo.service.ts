import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TipoEquipo } from '../../tipos-equipo/models/tipos-equipo';
import { Equipo } from '../models/equipo';
import { ListaEquipo } from '../models/lista-equipo';
@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  Equipos= new BehaviorSubject<ListaEquipo[]>([]);

  private AppUrl= 'https://localhost:44356/api/Inventario/';
  constructor(private http: HttpClient) { 

    this.ObtenerMarcas();
    this.ObtenerTipoEquipo();
    this. ObtenerEquipos()

  }
  ObtenerMarcas(){
    return this.http.get(this.AppUrl+'ObtenerMarcas')
  }
  ObtenerTipoEquipo(){
    return this.http.get<TipoEquipo[]>(this.AppUrl+'TiposEquipos')
  }
  ObtenerEquipos(){
    return this.http.get<ListaEquipo[]>(this.AppUrl+'ObtenerEquipos')
  }
  ObtenerEquiposPorId(id:number){
    return this.http.get<ListaEquipo[]>(this.AppUrl+'ObtenerEquiposPorId'+'/'+id)
  }
  ObtenerEquiposPorTipo(id:number){
    return this.http.get<ListaEquipo[]>(this.AppUrl+'ObtenerEquipoPorTipo'+'/'+id)
  }

  GuardarEquipo(Equipo:Equipo){
    return this.http.post(this.AppUrl+'RegistrarEquipo',Equipo)
  }
  ActualizarEquipo(idEquipo:number,Equipo:Equipo){
    return this.http.put(this.AppUrl+'RegistrarEquipo'+'/'+idEquipo,Equipo)
  }

  EnviarEquipos(Equipos:ListaEquipo[]){
    this.Equipos.next(Equipos)
  }

}
