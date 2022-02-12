import { Component, Input, OnInit } from '@angular/core';
import { Colaborador } from '../../models/colaborador';

@Component({
  selector: 'app-lista-colaboradores',
  templateUrl: './lista-colaboradores.component.html',
  styleUrls: ['./lista-colaboradores.component.scss']
})
export class ListaColaboradoresComponent implements OnInit {
  @Input() Colaboradores: Colaborador[] = [];
  constructor() { }
  
  ngOnInit(): void {
  }

}
