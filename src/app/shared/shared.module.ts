import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { DialogoConfirmacionComponent } from './components/dialogo-confirmacion/dialogo-confirmacion.component';



@NgModule({
  declarations: [
    NavbarComponent,
    DialogoConfirmacionComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    NavbarComponent,
    DialogoConfirmacionComponent
  ]
})
export class SharedModule { }
