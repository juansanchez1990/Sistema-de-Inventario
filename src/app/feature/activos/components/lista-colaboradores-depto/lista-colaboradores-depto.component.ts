import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColaboradorAsignar } from '../../models/colaborarorAsignar';
import { ActivosService } from '../../servicios/activos.service';

@Component({
  selector: 'app-lista-colaboradores-depto',
  templateUrl: './lista-colaboradores-depto.component.html',
  styleUrls: ['./lista-colaboradores-depto.component.scss']
})
export class ListaColaboradoresDeptoComponent implements OnInit {

  constructor(private ActivoServicio:ActivosService, 
              private rutaActiva: ActivatedRoute) { }
  ColaboradoresPorDepto:ColaboradorAsignar[]=[]
  idDepto: number = 0;
  nombreBuscar=""
  ngOnInit() {
    window.scroll(0,0);
    this.idDepto = Number(this.rutaActiva.snapshot.params.parametro)
    this.ObtenerColaboradoresDepto();

  }
ObtenerColaboradoresDepto(){
  this.ActivoServicio.ObtenerColaboradoresAsignar(this.idDepto).subscribe(colab=>{
    this.ColaboradoresPorDepto = colab;
    this.ActivoServicio.EnviarColaboradores(colab)
  })
}
}
