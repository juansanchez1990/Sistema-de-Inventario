import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentosRoutingModule } from './departamentos-routing.module';
import { AgregarDeptoComponent } from './components/agregar-depto/agregar-depto.component';
import { ListaDeptoComponent } from './components/lista-depto/lista-depto.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    AgregarDeptoComponent,
    ListaDeptoComponent,
    DepartamentosComponent
  ],
  imports: [
    CommonModule,
    DepartamentosRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class DepartamentosModule { }
