import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departamento } from '../../departamentos/models/departamento';
import { Asignacion } from '../models/asignacion';
import { Equipo } from '../models/equipo';

@Injectable({
  providedIn: 'root'
})
export class ActivosService {
  private AppUrl= 'https://localhost:44356/api/Inventario/';
  constructor(private http: HttpClient) { }
  ObtenerEquipos(){
    return this.http.get<Equipo[]>(this.AppUrl+'ObtenerEquiposParaAsignacion')
  }

  RegistrarAsignacion(Asignacion:Asignacion, idEquipo:number){
    return this.http.post(this.AppUrl+'RegistrarAsignacion'+'/'+idEquipo, Asignacion)

  }

  ObtenerDepartamentos(){
    return this.http.get<Departamento[]>(this.AppUrl+'ObtenerDepartamentos')
  }
}
