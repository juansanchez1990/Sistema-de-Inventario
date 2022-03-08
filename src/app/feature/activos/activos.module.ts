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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BuscarReferenciaPipe } from './pipes/buscar-referencia.pipe';
import { FormsModule } from '@angular/forms';
import { BuscarDescripcionPipe } from './pipes/buscar-descripcion.pipe';
import { BuscarColaboradorPipe } from './pipes/buscar-colaborador.pipe';
import { BuscarDeptoPipe } from './pipes/buscar-depto.pipe';


@NgModule({
  declarations: [
    ListaDeptoAsignarComponent,
    ListaColaboradoresDeptoComponent,
    AsignarEquipoComponent,
    HistorialComponent,
    EquiposAsignadosComponent,
    BuscarReferenciaPipe,
    BuscarDescripcionPipe,
    BuscarColaboradorPipe,
    BuscarDeptoPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ActivosRoutingModule,
    FormsModule,
    SharedModule,
    MaterialModule,
    ToastrModule.forRoot()
  ],
  providers: [ActivosService, ToastrService]
})
export class ActivosModule { }
