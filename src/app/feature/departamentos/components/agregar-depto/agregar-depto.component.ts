import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Departamento } from '../../models/departamento';
import { DepartamentoService } from '../../servicios/departamento.service';

@Component({
  selector: 'app-agregar-depto',
  templateUrl: './agregar-depto.component.html',
  styleUrls: ['./agregar-depto.component.scss']
})
export class AgregarDeptoComponent implements OnInit {

  constructor(private toastr:ToastrService,
              private DeptoServicio:DepartamentoService) { }
  DepartamentoForm = new FormGroup({
    Descripcion: new FormControl('', Validators.required),
    IdSucursal: new FormControl('', Validators.required),
  });
  ngOnInit() {
    this.RecibirDepartamentos();
  }

  RegistrarDepartamento(){
  
    if (this.DepartamentoForm.valid) {
      try{
      
        let Departamento:Departamento={
          Descripcion:this.DepartamentoForm.value['Descripcion'],
          Activo:true,
          IdSucursal:this.DepartamentoForm.value['IdSucursal'] 
        }
        this.DeptoServicio.RegistrarDepartamento(Departamento).subscribe(data=>{  
          this.toastr.success('¡Hecho!', 'Departamento registrado');
          this.RecibirDepartamentos();
          this.DepartamentoForm.reset();
        }, 
        
        (error:any) => {

        this.toastr.error('¡Error!', `${error.error.Message}`);
   
      }
        )
    
      }
  
       
      catch{
        
      }

    }
    else {
      this.toastr.error('¡Error!', 'Tiene que llenar todos los campos');
    }
  }
  
  RecibirDepartamentos(){
    this.DeptoServicio.ObtenerDepartamentos().subscribe(departamento=>{
      this.DeptoServicio.EnviarDepartamentos(departamento);
    })
  }


}
