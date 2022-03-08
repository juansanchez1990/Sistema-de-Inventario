import { Component, OnInit, AfterViewInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { TipoEquipo } from '../../models/tipos-equipo';
import { TiposEquipoService } from '../../servicios/tipos-equipo.service';



@Component({
  selector: 'app-lista-equipos',
  templateUrl: './lista-equipos.component.html',
  styleUrls: ['./lista-equipos.component.scss']
})
export class ListaEquiposComponent implements OnInit {

  @Input() tiposEquipo: TipoEquipo[] = [];
  @Output() borrarEquipo: EventEmitter<TipoEquipo> = new EventEmitter();
  pgIndex= 2;
  firstLastButtons= true;
  constructor() {

  }

  ngOnInit() {
   

  }

  ObtenerTipo(TipoEquipo: TipoEquipo, estado:boolean) {
     let DataEnviar:TipoEquipo={
      id:TipoEquipo.id,
      Descripcion:TipoEquipo.Descripcion,
      Activo:estado
     }
    this.borrarEquipo.emit(DataEnviar)

  }

  onChangePage(pe:PageEvent) {
   
  }
}



