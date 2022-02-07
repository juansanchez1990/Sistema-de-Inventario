import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiposEquipoRoutingModule } from './tipos-equipo-routing.module';
import { TiposEquipoComponent } from './components/tipos-equipo/tipos-equipo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ListaEquiposComponent } from './components/lista-equipos/lista-equipos.component';
import { TiposEquipoService } from './servicios/tipos-equipo.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TiposEquipoComponent,
    ListaEquiposComponent,
   
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    TiposEquipoRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [TiposEquipoService, ToastrService]
})
export class TiposEquipoModule { }
