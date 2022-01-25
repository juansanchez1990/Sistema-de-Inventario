import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/components/home/home.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./feature/login/login.module').then(m => m.LoginModule)},
  { path: 'Login', loadChildren: () => import('./feature/login/login.module').then(m => m.LoginModule)},
  { path: 'Home', loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule)},
  { path: 'TiposEquipo', loadChildren: () => import('./feature/tipos-equipo/tipos-equipo.module').then(m => m.TiposEquipoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
