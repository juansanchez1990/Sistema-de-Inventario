import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TipoEquipo } from '../../models/tipos-equipo';
import { TiposEquipoService } from '../../servicios/tipos-equipo.service';

@Component({
  selector: 'app-tipos-equipo',
  templateUrl: './tipos-equipo.component.html',
  styleUrls: ['./tipos-equipo.component.scss']
})
export class TiposEquipoComponent implements OnInit {

  ListaTiposEquipo: TipoEquipo[] = [];
  EquipoTipo:TipoEquipo[] = [];
  constructor(private TipoService:TiposEquipoService,
              private toastr:ToastrService) { }
   TipoForm = new FormGroup({
    Descripcion: new FormControl('', Validators.required),
  });
  ngOnInit() {
    this.ListaTiposEquipos()
   
  }

  BorrarTipo(Tipo:TipoEquipo){

    let TipoDelete:TipoEquipo={
      Descripcion: Tipo.Descripcion,
      Activo: Tipo.Activo,  
      id:Tipo.id    
    }

   this.TipoService.BorrarTipoEquipo(TipoDelete).subscribe(data=>{
     if (Tipo.Activo===false){
       this.toastr.success('¡Hecho!', 'Tipo de equipo desactivado');
     }
     else {

       this.toastr.success('¡Hecho!', 'Tipo de equipo activado');
     }
    this.ListaTiposEquipos();
   })   

  }

  RegistrarTipo(){
  
    if (this.TipoForm.valid) {
      try{
      
        let TipoEquipo:TipoEquipo={
          Descripcion:this.TipoForm.value['Descripcion'],
          Activo:true
  
        }
        this.TipoService.RegistrarTipoEquipo(TipoEquipo).subscribe(data=>{  
          this.toastr.success('¡Hecho!', 'Tipo de equipo registrado');
          this.ListaTiposEquipos()
          this.TipoForm.reset();
        }, (error:any) => {
          
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

  ListaTiposEquipos(){
      this.TipoService.ObtenerTipoEquipo().subscribe(tipoData=>{
        this.ListaTiposEquipo = tipoData
      })
    }
  

}
