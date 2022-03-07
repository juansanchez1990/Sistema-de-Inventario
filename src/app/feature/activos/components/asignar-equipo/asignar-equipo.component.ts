import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Asignacion } from '../../models/asignacion';
import { ColaboradorAsignar } from '../../models/colaborarorAsignar';
import { Equipo } from '../../models/equipo';
import { ActivosService } from '../../servicios/activos.service';
import { MatDialog } from "@angular/material/dialog";
import { DialogoConfirmacionComponent } from 'src/app/shared/components/dialogo-confirmacion/dialogo-confirmacion.component';
import { TipoEquipo } from 'src/app/feature/tipos-equipo/models/tipos-equipo';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-asignar-equipo',
  templateUrl: './asignar-equipo.component.html',
  styleUrls: ['./asignar-equipo.component.scss']
})
export class AsignarEquipoComponent implements OnInit {
  Equipos: Equipo[] = []
  Tipos: TipoEquipo[] = []
  Colaboradores: ColaboradorAsignar[] = []
  buscarReferencia: string = ''
  nombreColaborador: string = ''
  Descripcion: string = ''
  idColaborador: number = 0;
  @ViewChild('comentario') comentario!: ElementRef;
  constructor(private ActivoS: ActivosService, 
              private rutaActiva: ActivatedRoute, 
              public dialogo: MatDialog,
              private toastr:ToastrService) {
  }

  usuario: any
  ngOnInit() {
    this.ListaTiposEquipos()
    this.ActivoS.Colaboradores.subscribe(resp => {
      this.Colaboradores = resp

    })
    this.usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    this.idColaborador = Number(this.rutaActiva.snapshot.params.parametro)
    this.ActivoS.Colaboradores.subscribe(resp => {
      this.Colaboradores = resp.filter(c => c.id === this.idColaborador)

      this.nombreColaborador = this.Colaboradores[0].nombre_completo
    })
    this.ObtenerEquipos();
  }
  ObtenerEquipos() {
    this.ActivoS.ObtenerEquipos().subscribe(equipo => {
      this.Equipos = equipo

    })
  }

  ListaTiposEquipos() {
    this.ActivoS.ObtenerTipoEquipo().subscribe(tipoData => {
      this.Tipos = tipoData

    })
  }
  
  ObtenerTipoSeleccionado(idTipo:any){
 this.ActivoS.ObtenerEquipoPorId(idTipo).subscribe(resp=>{
   this.Equipos=resp;
 })
  }



  AsignarEquipo(EquipoAsignado: Equipo) {


    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: ` ¿Desea asignar este equipo a: ${this.nombreColaborador}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {

          const valueInput = this.comentario.nativeElement.value
          let AsignacionEquipo: Asignacion = {
            IdColaborador: this.idColaborador,
            Activo: true,
            IdEquipo: EquipoAsignado.id,
            Comentario: valueInput,
            usuarioAsignador: this.usuario.Usuario1
          }
          this.ActivoS.RegistrarAsignacion(AsignacionEquipo, EquipoAsignado.id).subscribe(asig => {
            this.ObtenerEquipos();
            this.toastr.success('¡Hecho!', `Equipo asignado a: ${this.nombreColaborador}`);
          })
        } else {

        }
      });


  }

}
