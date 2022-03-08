import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HistorialAsignacion } from '../../models/historial-asignacion';
import { ActivosService } from '../../servicios/activos.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {
  @ViewChild('codigo') codigo:any
  @ViewChild('referencia') referencia:any;
Historial:HistorialAsignacion[]=[]
  constructor(private ActivoServicio:ActivosService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
ObtenerHistorial(codigoEmpleado:any,CodigoReferencia:any){

this.ActivoServicio.ObtenerHistorial(codigoEmpleado,CodigoReferencia).subscribe(resp=>{

  if(resp.length===0){
    this.toastr.error('¡Error!', 'Este colaborador no ha tenido equipos asignados o referencia de equipo no encontrada');
  }
  else {

    this.Historial = resp;
    this.codigo.nativeElement.value = ' ';
    this.referencia.nativeElement.value = ' ';
  }


})
}
}
