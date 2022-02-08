import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TipoEquipo } from 'src/app/feature/tipos-equipo/models/tipos-equipo';
import { Equipo } from '../../models/equipo';
import { EquipoService } from '../../servicios/equipo.service';

@Component({
  selector: 'app-agregar-equipo',
  templateUrl: './agregar-equipo.component.html',
  styleUrls: ['./agregar-equipo.component.scss']
})
export class AgregarEquipoComponent implements OnInit {
  Marcas: any = []
  Tipos: TipoEquipo[] = []
  idMarca: number = 0
  idTipo: number | undefined
  constructor(private rutaActiva: ActivatedRoute,
    private EquipoServicio: EquipoService,
    private toastr:ToastrService) { }
  idEquipo: number = 0;
  ShowDataEdit: boolean = false

  EquipoForm = new FormGroup({
    Descripcion: new FormControl('', Validators.required),
    Activo: new FormControl(''),
    CodigoReferencia: new FormControl('', Validators.required),
  
  });
  ngOnInit() {
    this.ObtenerMarcas()
    this.ListaTiposEquipos()
    this.idEquipo = Number(this.rutaActiva.snapshot.params.parametro)

    if (this.idEquipo >= 1) {
      this.ShowDataEdit = true
    }

  }
  ObtenerMarcas() {
    this.EquipoServicio.ObtenerMarcas().subscribe(marca => {
      this.Marcas = marca
    })
  }

  ObtenerMarcaSeleccionada(Marca:any) {
    this.idMarca = Marca.id;
  }
  ObtenerTipoSeleccionado(Tipo:TipoEquipo) {
    this.idTipo = Tipo.id;
    console.log('idTipo', this.idTipo)
  }

  ListaTiposEquipos(){
    this.EquipoServicio.ObtenerTipoEquipo().subscribe(tipoData=>{
      this.Tipos = tipoData
    })
  }


 RegistrarEquipo(){
  let Equipo:Equipo={
    Descripcion:this.EquipoForm.value['Descripcion'],
    CodigoReferencia:this.EquipoForm.value['CodigoReferencia'],
    IdTipo: this.idTipo!,
    IdMarca: this.idMarca,
    Estado:1,
    Activo:true
  }
  this.EquipoServicio.GuardarEquipo(Equipo).subscribe(data=>{
    this.toastr.success('¡Hecho!', 'Tipo de equipo registrado');
    this.ListaTiposEquipos()
    this.EquipoForm.reset();

  })
  console.log('Equipo', Equipo)
 }

}
