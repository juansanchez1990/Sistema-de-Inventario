import { Component, Input, OnInit } from '@angular/core';
import { TipoEquipo } from 'src/app/feature/tipos-equipo/models/tipos-equipo';
import { Equipo } from '../../models/equipo';
import { ListaEquipo } from '../../models/lista-equipo';
import { EquipoService } from '../../servicios/equipo.service';

@Component({
  selector: 'app-equipos-lista',
  templateUrl: './equipos-lista.component.html',
  styleUrls: ['./equipos-lista.component.scss']
})
export class EquiposListaComponent implements OnInit {
  
  constructor(private EquipoServicio:EquipoService) { }
  Tipos: TipoEquipo[] = []
  idTipo!:number
  NombreABuscar!:string;
  @Input() Equipos: ListaEquipo[] = [];
  ListaEquipos: ListaEquipo[]= [];
  ngOnInit() {
    setTimeout (() => {
      this.ListaEquipos = this.Equipos

   }, 1000);
 
this.ListaTiposEquipos()
  }

  ListaTiposEquipos(){
    this.EquipoServicio.ObtenerTipoEquipo().subscribe(tipoData=>{
      this.Tipos = tipoData 
    })
  }

  ObtenerEquipos() {
    this.EquipoServicio.ObtenerEquipos().subscribe(equipo => {
      this.Equipos = equipo   
    })
  }

  ObtenerTipoSeleccionado(Tipo:TipoEquipo) {
    if(Tipo.id===undefined){
      this.idTipo=0
    }
    else {
      this.idTipo = Tipo.id ;
      this.EquipoServicio.ObtenerEquiposPorTipo(this.idTipo).subscribe(equipo=>{
        this.Equipos= equipo
      })
    }
 

  }

}
