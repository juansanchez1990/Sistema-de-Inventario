import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Departamento } from 'src/app/feature/departamentos/models/departamento';
import { Colaborador } from '../../models/colaborador';
import { ColaboradoresService } from '../../servicios/colaboradores.service';
import { MatDialog } from "@angular/material/dialog";
import { DialogoConfirmacionComponent } from 'src/app/shared/components/dialogo-confirmacion/dialogo-confirmacion.component';
@Component({
  selector: 'app-agregar-colaborador',
  templateUrl: './agregar-colaborador.component.html',
  styleUrls: ['./agregar-colaborador.component.scss']
})
export class AgregarColaboradorComponent implements OnInit {
  idEmpleado:number=0;
  ShowDataEdit:boolean=false
  Departamentos:Departamento[]=[]
  constructor(private rutaActiva: ActivatedRoute,
              private toastr:ToastrService,
              private ColabServicio:ColaboradoresService,
              public dialogo: MatDialog
              ) { }
  ColaboradorForm = new FormGroup({
    CodigoEmpleado: new FormControl('', Validators.required),
    IdDepartamento: new FormControl('', Validators.required),
  });
  ngOnInit() {
  
    this.ObtenerDepartamentos();
    this.RecibirColaboradores();
    this.idEmpleado =Number(this.rutaActiva.snapshot.params.parametro)
    if(this.idEmpleado>=1){
      this.ShowDataEdit=true
    }

  }

ObtenerDepartamentos(){
  this.ColabServicio.ObtenerDepartamentos().subscribe(depto=>{
    this.Departamentos =depto

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
          IdDepartamento:this.ColaboradorForm.value['IdDepartamento'] 
        } 
        this.ColabServicio.RegistrarDepartamento(Colaborador).subscribe(data=>{  
          this.toastr.success('¡Hecho!', 'Colaborador registrado');
          this.ColaboradorForm.reset();
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

  RecibirColaboradores(){
    this.ColabServicio.ObtenerColaboradores().subscribe(colaborador=>{
    
      this.ColabServicio.EnviarColaboradores(colaborador);
    })
  }

}
