import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquipoAsignado } from '../../models/equipo-asignado';
import { ActivosService } from '../../servicios/activos.service';

@Component({
  selector: 'app-equipos-asignados',
  templateUrl: './equipos-asignados.component.html',
  styleUrls: ['./equipos-asignados.component.scss']
})
export class EquiposAsignadosComponent implements OnInit {
  idColaborador: number = 0;
  Equipos:EquipoAsignado[]=[]
  constructor(private rutaActiva: ActivatedRoute, private ActivoService:ActivosService) { }

  ngOnInit() {
    this.idColaborador = Number(this.rutaActiva.snapshot.params.parametro)
    this.obtenerEquipoAsignado()
  }

  obtenerEquipoAsignado(){
    this.ActivoService.ObtenerEquipoAsignado(this.idColaborador).subscribe(equipo=>{
      this.Equipos = equipo;
      console.log(this.Equipos)
    })
  }

  DesasignarEquipo(idAsignacion:number){
    this.ActivoService.DesasignarEquipo(idAsignacion).subscribe(resp=>{
      this.obtenerEquipoAsignado()
    })
  }
}
