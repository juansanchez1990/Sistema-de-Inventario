import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Asignacion } from '../../models/asignacion';
import { ColaboradorAsignar } from '../../models/colaborarorAsignar';
import { Equipo } from '../../models/equipo';
import { ActivosService } from '../../servicios/activos.service';

@Component({
  selector: 'app-asignar-equipo',
  templateUrl: './asignar-equipo.component.html',
  styleUrls: ['./asignar-equipo.component.scss']
})
export class AsignarEquipoComponent implements OnInit {
  Equipos:Equipo[]=[]

  buscarReferencia:string=''
  Descripcion:string=''
  idColaborador: number = 0;
  @ViewChild('comentario') comentario!:ElementRef;
  constructor(private ActivoS:ActivosService, private rutaActiva: ActivatedRoute) {
   }

   usuario:any
   ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario')|| '{}');
    this.idColaborador = Number(this.rutaActiva.snapshot.params.parametro)
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
      IdColaborador:this.idColaborador,
      Activo:true,
      IdEquipo:EquipoAsignado.id,
      Comentario:valueInput, 
      usuarioAsignador:this.usuario.Usuario1
  }
  this.ActivoS.RegistrarAsignacion(AsignacionEquipo,EquipoAsignado.id).subscribe(asig=>{
    this.ObtenerEquipos();
  })

  }

}
