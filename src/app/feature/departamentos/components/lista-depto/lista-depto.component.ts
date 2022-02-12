import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-lista-depto',
  templateUrl: './lista-depto.component.html',
  styleUrls: ['./lista-depto.component.scss']
})
export class ListaDeptoComponent implements OnInit {
  @Input() Departamentos: Departamento[] = [];
  @Output() borrarDepartamento: EventEmitter<Departamento> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  ObtenerDepartamento(Departamento: Departamento, estado:boolean) {
    let DepartamentoEnviar:Departamento={
     id:Departamento.id,
     Descripcion:Departamento.Descripcion,
     Activo:estado,
     IdSucursal:Departamento.IdSucursal
    }
   this.borrarDepartamento.emit(DepartamentoEnviar)

 }
}
