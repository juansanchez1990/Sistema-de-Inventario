import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Departamento } from '../../departamentos/models/departamento';
import { Colaborador } from '../models/colaborador';

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {
  constructor(private http:HttpClient) { 
    this.ObtenerDepartamentos()
  }
  private AppUrl= 'https://localhost:44356/api/Inventario/';
  Colaboradores= new BehaviorSubject<Colaborador[]>([]);
  ObtenerDepartamentos(){
    return this.http.get<Departamento[]>(this.AppUrl+'ObtenerDepartamentos')
  }
  ObtenerColaboradores(){
    return this.http.get<Colaborador[]>(this.AppUrl+'ObtenerColaboradores')
  }
  RegistrarDepartamento(Colaborador:Colaborador){
    return this.http.post(this.AppUrl+'RegistrarColaborador',Colaborador)
  }

  EnviarColaboradores(Colaborador:Colaborador[]){

    this.Colaboradores.next(Colaborador);
  }
}
