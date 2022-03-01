import { Component, OnInit, ViewChild } from '@angular/core';
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
  constructor(private ActivoServicio:ActivosService) { }

  ngOnInit(): void {
  }
ObtenerHistorial(codigoEmpleado:any,CodigoReferencia:any){

this.ActivoServicio.ObtenerHistorial(codigoEmpleado,CodigoReferencia).subscribe(resp=>{
  this.Historial = resp;
  this.codigo.nativeElement.value = ' ';
  this.referencia.nativeElement.value = ' ';

})
}
}
