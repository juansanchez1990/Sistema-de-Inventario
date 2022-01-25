import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiposEquipoComponent } from './components/tipos-equipo/tipos-equipo.component';

const routes: Routes = [
  {path: '', component: TiposEquipoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiposEquipoRoutingModule { }
