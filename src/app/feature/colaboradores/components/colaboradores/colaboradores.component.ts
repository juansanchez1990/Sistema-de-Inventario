import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../../models/colaborador';
import { ColaboradoresService } from '../../servicios/colaboradores.service';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.scss']
})
export class ColaboradoresComponent implements OnInit {
  Colaboradores:Colaborador[]=[];
  constructor(private ColabServicio:ColaboradoresService) { }

  ngOnInit() {
    this.ObtenerColaboradores()
  }
ObtenerColaboradores(){
this.ColabServicio.Colaboradores.subscribe(colaborador=>{
  this.Colaboradores = colaborador
})
}
}
