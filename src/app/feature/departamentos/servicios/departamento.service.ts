import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Colaborador } from '../../colaboradores/models/colaborador';
import { Departamento } from '../models/departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  private AppUrl= 'https://localhost:44356/api/Inventario/';
  Departamentos= new BehaviorSubject<Departamento[]>([]);
  constructor(private http:HttpClient) {
    this.ObtenerDepartamentos()
   }
  RegistrarDepartamento(Departamento:Departamento){
    return this.http.post(this.AppUrl+'RegistrarDepartamento',Departamento)
  }
  ObtenerDepartamentos(){
    return this.http.get<Departamento[]>(this.AppUrl+'ObtenerDepartamentos')
  }
  EnviarDepartamentos(Departamentos:Departamento[]){
    this.Departamentos.next(Departamentos)
  }
  BorrarDepartamento(departamento:Departamento){
    return this.http.put(this.AppUrl+'BorrarDepartamento',departamento)
  }
 
}
