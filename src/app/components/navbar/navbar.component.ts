import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavBarService } from 'src/app/services/nav-bar.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  nombre!:string
  IconoMenu!:boolean;
  constructor(private navbarService:NavBarService) { }

  ngOnInit(): void {

    this.navbarService.NombreTitulo.subscribe(nombre=>{


      if(this.nombre===undefined || nombre==='Inicio'){
        this.nombre='Sistema de inventario'
        this.IconoMenu=true;
      }
      else {
        
        this.nombre = nombre
        this.IconoMenu=false;
      }
      console.log('IconoMenu', this.IconoMenu)
    })
  }
  clickMenu() { 
    this.navbarService.toggle();
  }
}
