import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Departamento } from 'src/app/feature/departamentos/models/departamento';
import { Colaborador } from '../../models/colaborador';
import { ColaboradoresService } from '../../servicios/colaboradores.service';
import { MatDialog } from "@angular/material/dialog";
import { DialogoConfirmacionComponent } from 'src/app/shared/components/dialogo-confirmacion/dialogo-confirmacion.component';
import { DepartamentoColaborador } from '../../models/DepartamentoColaboradores';
@Component({
  selector: 'app-agregar-colaborador',
  templateUrl: './agregar-colaborador.component.html',
  styleUrls: ['./agregar-colaborador.component.scss']
})
export class AgregarColaboradorComponent implements OnInit {
  idEmpleado:number=0;
  ShowDataEdit:boolean=false
  Departamentos:DepartamentoColaborador[]=[]
  ColaboradorForm!:FormGroup
  constructor(private rutaActiva: ActivatedRoute,
              private toastr:ToastrService,
              private ColabServicio:ColaboradoresService,
              public dialogo: MatDialog
              ) { }
 
  ngOnInit() {
  
    this.ObtenerDepartamentos();
    this.RecibirColaboradores();
    this.idEmpleado =Number(this.rutaActiva.snapshot.params.parametro)
   
    if(this.idEmpleado>=1){
      this.ColabServicio.ObtenerColaboradoresPorId(this.idEmpleado).subscribe(colab=>{
     
        this.ColaboradorForm = new FormGroup({
          CodigoEmpleado: new FormControl(colab[0].CodigoEmpleado, Validators.required),
          IdDepartamento: new FormControl(colab[0].IdDepartamento, Validators.required),
        });
      })
      this.ShowDataEdit=true
    

    }
    else {
        this.ColaboradorForm = new FormGroup({
        CodigoEmpleado: new FormControl('', Validators.required),
        IdDepartamento: new FormControl('', Validators.required),
  });
    }

  }

ObtenerDepartamentos(){
  this.ColabServicio.ObtenerSucursales().subscribe(depto=>{
   this.Departamentos = depto;
  })
}

buscarColaborador(){
  let CodigoEmpleado=this.ColaboradorForm.value['CodigoEmpleado']
  this.ColabServicio.buscarColaborador(CodigoEmpleado).subscribe(resp=>{
  
    if( resp.length===0){
      this.toastr.error('¡Error!', 'No existe colaborador con ese codigo de empleado');
      }
    else {
      this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `El colaborador es ${resp[0].nombre_completo}, ¿desea agregarlo(a)?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.RegistrarColaborador();
        } else {
      
        }
      });


    }
  })
}
  RegistrarColaborador(){
  
    if (this.ColaboradorForm.valid) {
      try{
      
        let Colaborador:Colaborador={
          CodigoEmpleado:this.ColaboradorForm.value['CodigoEmpleado'],
          Activo:true,
          IdDepartamento:this.ColaboradorForm.value['IdDepartamento'], 
          nombre_completo:''
        }
        
        if (this.ShowDataEdit===false){

          this.ColabServicio.RegistrarColaborador(Colaborador).subscribe(data=>{  
            this.toastr.success('¡Hecho!', 'Colaborador registrado');
            this.RecibirColaboradores();
          }, 
          
          (error:any) => {
         
          this.toastr.error('¡Error!', `${error.error.Message}`);
     
        }
         )
        }

        else{
        
          this.ColabServicio.ActualizarColaborador(this.idEmpleado,Colaborador).subscribe(resp=>{
            this.toastr.success('¡Hecho!', 'Colaborador actualizado');
          })

        }
    
      }
  
       
      catch{
        
      }

    }
    else {
      this.toastr.error('¡Error!', 'Tiene que llenar todos los campos');
    }
  }

  RecibirColaboradores(){
    this.ColabServicio.ObtenerColaboradores().subscribe(colaborador=>{
    
      this.ColabServicio.EnviarColaboradores(colaborador);
    })
  }

}
