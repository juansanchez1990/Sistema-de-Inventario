import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Asignacion } from '../../models/asignacion';
import { Equipo } from '../../models/equipo';
import { ActivosService } from '../../servicios/activos.service';

@Component({
  selector: 'app-asignar-equipo',
  templateUrl: './asignar-equipo.component.html',
  styleUrls: ['./asignar-equipo.component.scss']
})
export class AsignarEquipoComponent implements OnInit {
  Equipos:Equipo[]=[]
  buscarEqipo:string=''
  @ViewChild('comentario') comentario!:ElementRef;
  constructor(private ActivoS:ActivosService) {
   }

  ngOnInit() {
  this.ObtenerEquipos();
  }
  ObtenerEquipos(){
    this.ActivoS.ObtenerEquipos().subscribe(equipo=>{
      this.Equipos=equipo
    })
  }

  AsignarEquipo(EquipoAsignado:Equipo){
    const valueInput = this.comentario.nativeElement.value
    let AsignacionEquipo:Asignacion={
      IdColaborador:1,
      Activo:true,
      IdEquipo:EquipoAsignado.id,
      Comentario:valueInput 
  }
  this.ActivoS.RegistrarAsignacion(AsignacionEquipo,EquipoAsignado.id).subscribe(asig=>{
    this.ObtenerEquipos();
  })

  }

}
