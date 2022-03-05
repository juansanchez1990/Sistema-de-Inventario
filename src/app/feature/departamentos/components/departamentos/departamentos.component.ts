import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Departamento } from '../../models/departamento';
import { DepartamentoService } from '../../servicios/departamento.service';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.scss']
})
export class DepartamentosComponent implements OnInit {
  ListaDepartamentos:Departamento[]=[]
  
  constructor(private DeptoServicio:DepartamentoService,
              private toastr:ToastrService) { }

  ngOnInit() {
  this.ObtenerDepartamentos()
  }
ObtenerDepartamentos(){
  this.DeptoServicio.Departamentos.subscribe(depto=>{
    this.ListaDepartamentos =depto;
  })
}
  BorrarDepartamento(Departamento:Departamento){

    let DepartamentoDelete:Departamento={
      Descripcion: Departamento.Descripcion,
      Activo: Departamento.Activo,  
      id:Departamento.id  ,
      IdSucursal:Departamento.IdSucursal  
    }

   this.DeptoServicio.BorrarDepartamento(DepartamentoDelete).subscribe(data=>{
     if (Departamento.Activo===false){
       this.toastr.success('¡Hecho!', 'Departamento desactivado');
     }
     else {

       this.toastr.success('¡Hecho!', 'Departamento activado');
     }
     this.DeptoServicio.ObtenerDepartamentos().subscribe(departamento=>{
      this.DeptoServicio.EnviarDepartamentos(departamento);
    })
   })   

  }

}
