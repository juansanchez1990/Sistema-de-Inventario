import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/feature/departamentos/models/departamento';
import { ActivosService } from '../../servicios/activos.service';

@Component({
  selector: 'app-lista-depto-asignar',
  templateUrl: './lista-depto-asignar.component.html',
  styleUrls: ['./lista-depto-asignar.component.scss']
})
export class ListaDeptoAsignarComponent implements OnInit {

  constructor(private ActivoServicio:ActivosService) { }
  Departamentos:Departamento[]=[]
  ngOnInit() {
    this.ActivoServicio.ObtenerDepartamentos().subscribe(depto=>{
      this.Departamentos = depto
    })
  }

}
