import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Colaborador } from '../../colaboradores/models/colaborador';
import { Departamento } from '../../departamentos/models/departamento';
import { TipoEquipo } from '../../tipos-equipo/models/tipos-equipo';
import { Asignacion } from '../models/asignacion';
import { ColaboradorAsignar } from '../models/colaborarorAsignar';
import { DeptoSucursal } from '../models/deptoSucursal';
import { Equipo } from '../models/equipo';
import { EquipoAsignado } from '../models/equipo-asignado';
import { HistorialAsignacion } from '../models/historial-asignacion';

@Injectable({
  providedIn: 'root'
})
export class ActivosService {
  private AppUrl= 'https://localhost:44356/api/Inventario/';
  Colaboradores= new BehaviorSubject<ColaboradorAsignar[]>([]);
  constructor(private http: HttpClient) { }
  ObtenerEquipos(){
    return this.http.get<Equipo[]>(this.AppUrl+'ObtenerEquiposParaAsignacion')
  }

  RegistrarAsignacion(Asignacion:Asignacion, idEquipo:number){
    return this.http.post(this.AppUrl+'RegistrarAsignacion'+'/'+idEquipo, Asignacion)

  }

  ObtenerSucursalPorDepto(){
    return this.http.get<DeptoSucursal[]>(this.AppUrl+'ObtenerSucursales')
  }

  ObtenerColaboradoresAsignar(idDepartamento:number){
    return this.http.get<ColaboradorAsignar[]>(this.AppUrl+'ColaboradoresAsignacion'+'/'+idDepartamento)
  }

  ObtenerEquipoAsignado(idColaborador:number){
    return this.http.get<EquipoAsignado[]>(this.AppUrl+'ObtenerEquipoAsignado'+'/'+idColaborador)
  }
  
  DesasignarEquipo(idAsignacion:number,idEquipo:number){
    return this.http.put(this.AppUrl+'DesasignarEquipo'+'/'+idAsignacion+'/'+idEquipo,idAsignacion)

  }

   ObtenerHistorial(CodigoEmpleado:number, Referencia:string){
    return this.http.get<HistorialAsignacion[]>(this.AppUrl+'ObtenerEquiposAsignadosPorUsuario'+'/'+CodigoEmpleado+'/'+Referencia)
 }

 ObtenerTipoEquipo(){
  return this.http.get<TipoEquipo[]>(this.AppUrl+'TiposEquipos')
}
 ObtenerEquipoPorId(idTipo:number){
  return this.http.get<Equipo[]>(this.AppUrl+'getEquipoPorTipo'+'/'+idTipo)
}

 EnviarColaboradores(Colaborador:ColaboradorAsignar[]){

  this.Colaboradores.next(Colaborador);
}
}
