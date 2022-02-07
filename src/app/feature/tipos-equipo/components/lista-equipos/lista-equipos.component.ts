import { Component, OnInit,AfterViewInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { TipoEquipo } from '../../models/tipos-equipo';
import { TiposEquipoService } from '../../servicios/tipos-equipo.service';



@Component({
  selector: 'app-lista-equipos',
  templateUrl: './lista-equipos.component.html',
  styleUrls: ['./lista-equipos.component.scss']
})
export class ListaEquiposComponent implements OnInit {
 
  @Input() tiposEquipo: TipoEquipo[] = [];
  @Output() tipoEquipo: EventEmitter<TipoEquipo>= new EventEmitter();
  ListaTipos: TipoEquipo[] = [];
  constructor() {

  }

  ngOnInit() {
    setTimeout (() => {
      this.ListaTipos = this.tiposEquipo

   }, 1000);
  
  }

  ObtenerTipo(TipoEquipo:TipoEquipo){

this.tipoEquipo.emit(TipoEquipo)

  }
}



