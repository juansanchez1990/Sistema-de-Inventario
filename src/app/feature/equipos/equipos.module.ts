import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquiposRoutingModule } from './equipos-routing.module';
import { EquiposComponent } from './components/equipos/equipos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { EquiposListaComponent } from './components/equipos-lista/equipos-lista.component';


@NgModule({
  declarations: [
    EquiposComponent,
    EquiposListaComponent
  ],
  imports: [
    CommonModule,
    EquiposRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class EquiposModule { }
