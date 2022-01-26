import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEquipoComponent } from './components/agregar-equipo/agregar-equipo.component';
import { EquiposComponent } from './components/equipos/equipos.component';

const routes: Routes = [
  {path: '', component: EquiposComponent},
  {path: 'AgregarEquipo/:parametro', component: AgregarEquipoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquiposRoutingModule { }
