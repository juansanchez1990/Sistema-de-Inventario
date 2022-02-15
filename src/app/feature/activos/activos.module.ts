import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivosRoutingModule } from './activos-routing.module';
import { ListaDeptoAsignarComponent } from './components/lista-depto-asignar/lista-depto-asignar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ListaColaboradoresDeptoComponent } from './components/lista-colaboradores-depto/lista-colaboradores-depto.component';
import { AsignarEquipoComponent } from './components/asignar-equipo/asignar-equipo.component';
import { HistorialComponent } from './components/historial/historial.component';
import { EquiposAsignadosComponent } from './components/equipos-asignados/equipos-asignados.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ActivosService } from './servicios/activos.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ListaDeptoAsignarComponent,
    ListaColaboradoresDeptoComponent,
    AsignarEquipoComponent,
    HistorialComponent,
    EquiposAsignadosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ActivosRoutingModule, 
   SharedModule,
   MaterialModule, 
   ToastrModule.forRoot()
  ],
  providers: [ActivosService, ToastrService]
})
export class ActivosModule { }
