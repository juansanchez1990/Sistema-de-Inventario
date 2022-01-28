import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignarEquipoComponent } from './components/asignar-equipo/asignar-equipo.component';
import { EquiposAsignadosComponent } from './components/equipos-asignados/equipos-asignados.component';
import { HistorialComponent } from './components/historial/historial.component';
import { ListaColaboradoresDeptoComponent } from './components/lista-colaboradores-depto/lista-colaboradores-depto.component';
import { ListaDeptoAsignarComponent } from './components/lista-depto-asignar/lista-depto-asignar.component';

const routes: Routes = [
  {path: '', component: ListaDeptoAsignarComponent},
  {path: 'Historial', component: HistorialComponent},
  {path: 'ColaboradoresDepto/:parametro', component: ListaColaboradoresDeptoComponent},
  {path: 'Asignar-Equipo/:parametro', component: AsignarEquipoComponent},
  {path: 'Equipos-Asignados/:parametro', component: EquiposAsignadosComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivosRoutingModule { }
