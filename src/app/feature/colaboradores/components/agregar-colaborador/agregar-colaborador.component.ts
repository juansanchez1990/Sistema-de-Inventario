import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-agregar-colaborador',
  templateUrl: './agregar-colaborador.component.html',
  styleUrls: ['./agregar-colaborador.component.scss']
})
export class AgregarColaboradorComponent implements OnInit {
  idEmpleado:number=0;
  ShowDataEdit:boolean=false
  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.idEmpleado =Number(this.rutaActiva.snapshot.params.parametro)
    if(this.idEmpleado>=1){
      this.ShowDataEdit=true
    }
  }

}
