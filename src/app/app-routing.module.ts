import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./feature/login/login.module').then(m => m.LoginModule)},
  { path: 'Login', loadChildren: () => import('./feature/login/login.module').then(m => m.LoginModule)},
  { path: 'Home', loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule)},
  { path: 'TiposEquipo', loadChildren: () => import('./feature/tipos-equipo/tipos-equipo.module').then(m => m.TiposEquipoModule)},
  { path: 'Equipos', loadChildren: () => import('./feature/equipos/equipos.module').then(m => m.EquiposModule)},
  { path: 'Departamentos', loadChildren: () => import('./feature/departamentos/departamentos.module').then(m => m.DepartamentosModule)},
  { path: 'Colaboradores', loadChildren: () => import('./feature/colaboradores/colaboradores.module').then(m => m.ColaboradoresModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
