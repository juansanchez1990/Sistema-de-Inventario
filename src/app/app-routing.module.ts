import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TiposEquiposComponent } from './components/tipos-equipos/tipos-equipos.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'Inicio', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'TiposEquipos', component: TiposEquiposComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
