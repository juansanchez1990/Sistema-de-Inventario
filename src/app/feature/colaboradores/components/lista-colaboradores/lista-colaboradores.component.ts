import { Component, Input, OnInit } from '@angular/core';
import { Departamento } from 'src/app/feature/departamentos/models/departamento';
import { Colaborador } from '../../models/colaborador';
import { DepartamentoColaborador } from '../../models/DepartamentoColaboradores';
import { ColaboradoresService } from '../../servicios/colaboradores.service';

@Component({
  selector: 'app-lista-colaboradores',
  templateUrl: './lista-colaboradores.component.html',
  styleUrls: ['./lista-colaboradores.component.scss']
})
export class ListaColaboradoresComponent implements OnInit {
  @Input() Colaboradores: Colaborador[] = [];
  Departamentos:DepartamentoColaborador[]=[]
  DeptoID:number=0
  NombreABuscar:string=''
  constructor(private ColabServicio:ColaboradoresService) { }
  
  ngOnInit() {
    this.obtenerDepartamentos();
    setTimeout (() => {
     console.log('Colaboradores',this.Colaboradores)

   }, 125);
  }

  obtenerDepartamentos(){
    this.ColabServicio.ObtenerSucursales().subscribe(depto=>{
      this.Departamentos=depto;
    })
  }

  ObtenerDeptoSeleccionado(idDepto:number) {
    if(idDepto===0){
      this.obtenerDepartamentos()
    }
    else {
      
      this.obtenerDepartamentos()
      this.Departamentos = this.Departamentos.filter(depto=>depto.id===idDepto)
    }
  
  }

}
