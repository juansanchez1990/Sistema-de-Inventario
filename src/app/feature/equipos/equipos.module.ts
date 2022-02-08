import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquiposRoutingModule } from './equipos-routing.module';
import { EquiposComponent } from './components/equipos/equipos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { EquiposListaComponent } from './components/equipos-lista/equipos-lista.component';
import { AgregarEquipoComponent } from './components/agregar-equipo/agregar-equipo.component';
import { EquipoService } from './servicios/equipo.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EquiposComponent,
    EquiposListaComponent,
    AgregarEquipoComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    EquiposRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [EquipoService, ToastrService]
})
export class EquiposModule { }
