import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiposEquipoRoutingModule } from './tipos-equipo-routing.module';
import { TiposEquipoComponent } from './components/tipos-equipo/tipos-equipo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ListaEquiposComponent } from './components/lista-equipos/lista-equipos.component';


@NgModule({
  declarations: [
    TiposEquipoComponent,
    ListaEquiposComponent,
   
  ],
  imports: [
    CommonModule,
    TiposEquipoRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class TiposEquipoModule { }
