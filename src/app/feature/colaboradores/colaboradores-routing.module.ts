import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarColaboradorComponent } from './components/agregar-colaborador/agregar-colaborador.component';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores.component';

const routes: Routes = [
  {path: '', component: ColaboradoresComponent},
  {path: 'AgregarColaborador/:parametro', component: AgregarColaboradorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColaboradoresRoutingModule { }
