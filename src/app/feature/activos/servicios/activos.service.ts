import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departamento } from '../../departamentos/models/departamento';
import { Asignacion } from '../models/asignacion';
import { ColaboradorAsignar } from '../models/colaborarorAsignar';
import { Equipo } from '../models/equipo';
import { EquipoAsignado } from '../models/equipo-asignado';
import { HistorialAsignacion } from '../models/historial-asignacion';

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

  ObtenerColaboradoresAsignar(idDepartamento:number){
    return this.http.get<ColaboradorAsignar[]>(this.AppUrl+'ColaboradoresAsignacion'+'/'+idDepartamento)
  }

  ObtenerEquipoAsignado(idColaborador:number){
    return this.http.get<EquipoAsignado[]>(this.AppUrl+'ObtenerEquipoAsignado'+'/'+idColaborador)
  }
  
  DesasignarEquipo(idAsignacion:number){
    return this.http.put(this.AppUrl+'DesasignarEquipo'+'/'+idAsignacion,idAsignacion)

  }

   ObtenerHistorial(CodigoEmpleado:number, Referencia:string){
    return this.http.get<HistorialAsignacion[]>(this.AppUrl+'ObtenerEquiposAsignadosPorUsuario'+'/'+CodigoEmpleado+'/'+Referencia)
 }
}
