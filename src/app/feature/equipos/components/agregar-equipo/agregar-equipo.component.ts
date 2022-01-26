import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-agregar-equipo',
  templateUrl: './agregar-equipo.component.html',
  styleUrls: ['./agregar-equipo.component.scss']
})
export class AgregarEquipoComponent implements OnInit {

  constructor(private rutaActiva: ActivatedRoute) { }
  idEquipo:number=0;
  ShowDataEdit:boolean=false
  ngOnInit(): void {
    this.idEquipo =Number(this.rutaActiva.snapshot.params.parametro)

    if(this.idEquipo>=1){
      this.ShowDataEdit=true
    }

  } 

}
