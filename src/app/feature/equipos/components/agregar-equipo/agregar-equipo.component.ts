import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TipoEquipo } from 'src/app/feature/tipos-equipo/models/tipos-equipo';
import { Equipo } from '../../models/equipo';
import { ListaEquipo } from '../../models/lista-equipo';
import { EquipoService } from '../../servicios/equipo.service';

@Component({
  selector: 'app-agregar-equipo',
  templateUrl: './agregar-equipo.component.html',
  styleUrls: ['./agregar-equipo.component.scss']
})
export class AgregarEquipoComponent implements OnInit {
  checked: boolean = true;
  Marcas: any = []
  Tipos: TipoEquipo[] = []
  Equipos: ListaEquipo[] = []
  idMarca: number = 0
  idTipo: number | undefined
  constructor(private rutaActiva: ActivatedRoute,
    private EquipoServicio: EquipoService,
    private toastr:ToastrService) { }
  idEquipo: number = 0;
  ShowDataEdit: boolean = false
  EquipoForm!:FormGroup
  EquipoActivo:string='';
  
  ngOnInit() {
    this.ObtenerMarcas()
    this.ListaTiposEquipos()
    this.ObtenerEquipos()
    this.idEquipo = Number(this.rutaActiva.snapshot.params.parametro)

    if (this.idEquipo >= 1) {
      this.EquipoServicio.ObtenerEquiposPorId(this.idEquipo).subscribe(equipo=>{
      
   
        this.EquipoActivo = equipo[0].Activo
        if (this.EquipoActivo==='Si'){
          this.checked = true
        }
        else if (this.EquipoActivo==='No'){
          this.checked = false
        }
    
          this.EquipoForm = new FormGroup({
          Descripcion: new FormControl(equipo[0].Descripcion, Validators.required),
          Activo: new FormControl(equipo[0].Activo),
          CodigoReferencia: new FormControl(equipo[0].Referencia, Validators.required),
          MarcaEquipo: new FormControl(equipo[0].MarcaEquipo.id, Validators.required),
          TipoDeEquipo: new FormControl(equipo[0].TipoDeEquipo.id, Validators.required),
          Estado: new FormControl(equipo[0].Estado, Validators.required),
        });        
      })
      this.ShowDataEdit = true
    }
    else {
        this.EquipoForm = new FormGroup({
        Descripcion: new FormControl('', Validators.required),
        Activo: new FormControl(''),
        CodigoReferencia: new FormControl('', Validators.required),
        MarcaEquipo: new FormControl('', Validators.required),
        TipoDeEquipo: new FormControl('', Validators.required),  
        Estado: new FormControl('', Validators.required),  
      });
    }

  }
  ObtenerMarcas() {
    this.EquipoServicio.ObtenerMarcas().subscribe(marca => {
      this.Marcas = marca
    })
  }
  ObtenerEquipos() {
    this.EquipoServicio.ObtenerEquipos().subscribe(equipo => {
      this.Equipos = equipo   
      this.EquipoServicio.EnviarEquipos(this.Equipos);
    })
  }

  ObtenerMarcaSeleccionada(Marca:any) {
    this.idMarca = Marca.id;
  }
  ObtenerTipoSeleccionado(Tipo:TipoEquipo) {
    this.idTipo = Tipo.id;
  }

  ListaTiposEquipos(){
    this.EquipoServicio.ObtenerTipoEquipo().subscribe(tipoData=>{
      this.Tipos = tipoData
   
    })
  }


 RegistrarEquipo(){
   if (this.EquipoForm.valid){

     let Equipo:Equipo={
       Descripcion:this.EquipoForm.value['Descripcion'],
       CodigoReferencia:this.EquipoForm.value['CodigoReferencia'],
       IdTipo: this.EquipoForm.value['TipoDeEquipo'],
       IdMarca: this.EquipoForm.value['MarcaEquipo'],
       Estado:this.EquipoForm.value['Estado'],
       Activo:this.checked,
       Asignado:false
     }
     if (this.ShowDataEdit===false){
   
       this.EquipoServicio.GuardarEquipo(Equipo).subscribe(data=>{
         this.toastr.success('¡Hecho!', 'Equipo Registrado');
         this.ObtenerEquipos()
         this.EquipoForm.reset();
     
       })
     }
   
     else {
       this.EquipoServicio.ActualizarEquipo(this.idEquipo,Equipo).subscribe(data=>{
         this.toastr.success('¡Hecho!', 'Equipo Actualizado');
         this.ObtenerEquipos()
         this.EquipoForm.reset();
     
       })
     }
   }

   else {
    this.toastr.error('¡Error!', 'Debe de ingresar todos los campos');
   }

 }


 IsActivo(event:any){
  let checked = event.checked
  if (checked ===true){
    this.checked = true
  }

  else {
    this.checked = false;
  }
  console.log('checked', this.checked)
}

}
