import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Departamento } from '../../departamentos/models/departamento';
import { Colaborador } from '../models/colaborador';
import { DepartamentoColaborador } from '../models/DepartamentoColaboradores';

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {
  constructor(private http:HttpClient) { 
    this.ObtenerSucursales()
  }
  private AppUrl= 'https://localhost:44356/api/Inventario/';
  Colaboradores= new BehaviorSubject<Colaborador[]>([]);
  ObtenerSucursales(){
    return this.http.get<DepartamentoColaborador[]>(this.AppUrl+'ObtenerSucursales')
  }
  ObtenerColaboradores(){
    return this.http.get<Colaborador[]>(this.AppUrl+'ObtenerColaboradores')
  }
  ObtenerColaboradoresPorId(id:number){
    return this.http.get<Colaborador[]>(this.AppUrl+'BuscarColaboradorPorId'+'/'+id)
  }
  RegistrarDepartamento(Colaborador:Colaborador){
    return this.http.post(this.AppUrl+'RegistrarColaborador',Colaborador)
  }

  EnviarColaboradores(Colaborador:Colaborador[]){

    this.Colaboradores.next(Colaborador);
  }

  buscarColaborador(codigo:string){

    return this.http.get<Colaborador[]>(this.AppUrl+'BuscarColaborador'+'/'+ codigo)

  }

  ActualizarColaborador(idColaborador:number, colaborador:Colaborador){
    return this.http.put(this.AppUrl+'UpdateColaborador'+'/'+idColaborador,colaborador)
  }
}
