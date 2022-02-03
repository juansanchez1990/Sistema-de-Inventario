import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { RegistroRoutingModule } from './registro-routing.module';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RegistroService } from './servicios/registro.service';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    RegistrarUsuarioComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RegistroRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [RegistroService, ToastrService]
})
export class RegistroModule { }
