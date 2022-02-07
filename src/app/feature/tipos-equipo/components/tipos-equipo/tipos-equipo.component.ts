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

    setTimeout (() => {
      let TipoDelete:TipoEquipo={
        Descripcion: Tipo.Descripcion,
        Activo: false,  
        id:Tipo.id    
      }

     this.TipoService.BorrarTipoEquipo(TipoDelete).subscribe(data=>{
      this.toastr.success('¡Hecho!', 'Tipo de equipo borrado');
      this.ListaTiposEquipos();
     })   
   }, 125);

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
          this.TipoForm.reset();
        }, (error:any) => {
          console.log(error)
        this.toastr.error('¡Error!', `${error.error.Message}`);
   
      }
        )
        this.ListaTiposEquipos()
      }
  
       
      catch{
        
      }

    }
    else {
      this.toastr.error('¡Error!', 'Tiene que llenar todos los campos');
    }
  }

  ListaTiposEquipos(){
    this.ListaTiposEquipo = []
      this.TipoService.ObtenerTipoEquipo().subscribe(tipoData=>{
        this.ListaTiposEquipo = tipoData

      })
    }
  

}
