import { Component, OnInit } from '@angular/core';
import { ListaEquipo } from '../../models/lista-equipo';
import { EquipoService } from '../../servicios/equipo.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.scss']
})
export class EquiposComponent implements OnInit {
  selectedIndex = 0;
  ListaEquipos:ListaEquipo[]=[]
  constructor(private EquipoServicio:EquipoService) { }

  ngOnInit() {
 this.EquipoServicio.Equipos.subscribe(equipo=>{
   this.ListaEquipos = equipo
   console.log('ListaEquipos', this.ListaEquipos)

 })
  }

}
