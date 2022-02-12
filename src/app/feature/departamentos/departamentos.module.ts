import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentosRoutingModule } from './departamentos-routing.module';
import { AgregarDeptoComponent } from './components/agregar-depto/agregar-depto.component';
import { ListaDeptoComponent } from './components/lista-depto/lista-depto.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { DepartamentoService } from './servicios/departamento.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AgregarDeptoComponent,
    ListaDeptoComponent,
    DepartamentosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DepartamentosRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [DepartamentoService, ToastrService]
})
export class DepartamentosModule { }
