import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  // {path:'', component:HomeComponent,

  //   data:{
  //     redirectTo:"/home"
  //   }

  // },
  {path:"home", component:HomeComponent},
  {path:"", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
