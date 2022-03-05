import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColaboradoresRoutingModule } from './colaboradores-routing.module';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores.component';
import { AgregarColaboradorComponent } from './components/agregar-colaborador/agregar-colaborador.component';
import { ListaColaboradoresComponent } from './components/lista-colaboradores/lista-colaboradores.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ColaboradoresService } from './servicios/colaboradores.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BuscarColaboradorPipe } from './pipes/buscar-colaborador.pipe';


@NgModule({
  declarations: [
    ColaboradoresComponent,
    AgregarColaboradorComponent,
    ListaColaboradoresComponent,
    BuscarColaboradorPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ColaboradoresRoutingModule,
    FormsModule,
    SharedModule,
    MaterialModule,
    ToastrModule.forRoot()
  ],
  providers: [ColaboradoresService, ToastrService]
})
export class ColaboradoresModule { }
