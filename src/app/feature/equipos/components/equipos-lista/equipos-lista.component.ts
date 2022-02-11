import { Component, Input, OnInit } from '@angular/core';
import { Equipo } from '../../models/equipo';
import { ListaEquipo } from '../../models/lista-equipo';
import { EquipoService } from '../../servicios/equipo.service';

@Component({
  selector: 'app-equipos-lista',
  templateUrl: './equipos-lista.component.html',
  styleUrls: ['./equipos-lista.component.scss']
})
export class EquiposListaComponent implements OnInit {
  
  constructor() { }
  @Input() Equipos: ListaEquipo[] = [];
  ngOnInit() {
    setTimeout (() => {
      console.log('Equipos', this.Equipos)
   }, 125);

  }

}
