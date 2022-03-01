import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { MenuItemsComponent } from './components/menu-items/menu-items.component';
import { LoginService } from '../login/servicios/login.service';


@NgModule({
  declarations: [
    HomeComponent,
    MenuItemsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule
  ],
  providers:[LoginService]
})
export class HomeModule { }
