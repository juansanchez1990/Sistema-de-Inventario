import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColaboradoresRoutingModule } from './colaboradores-routing.module';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores.component';
import { AgregarColaboradorComponent } from './components/agregar-colaborador/agregar-colaborador.component';
import { ListaColaboradoresComponent } from './components/lista-colaboradores/lista-colaboradores.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    ColaboradoresComponent,
    AgregarColaboradorComponent,
    ListaColaboradoresComponent
  ],
  imports: [
    CommonModule,
    ColaboradoresRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class ColaboradoresModule { }
