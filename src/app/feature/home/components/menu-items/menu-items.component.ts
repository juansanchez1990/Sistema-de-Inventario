import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements AfterViewInit, OnInit {
  @Output() openMenu = new EventEmitter();
  usuario:any
  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
}
  constructor() { }

  estados = [
    {
      id: 1,
      open: false,
    },
    {
      id: 2,
      open: false,
    },
    {
      id: 3,
      open: false,
    },
    {
      id: 4,
      open: false,
    },
 

   
  ];


  @ViewChild('sidenav') 
  public sidenav!: MatSidenav;
  title = 'InventarioSystem';
  showFiller = false;
 
  Open:boolean=true
  myColor!: string;

  ngAfterViewInit(): void {
    this.sidenav
  }

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario')|| '{}');
    console.log(this.usuario)
  }

  CloseSidenav(){
    this.openMenu.emit();
  }

  OpenClose(number:number){

    if (this.estados[number].open === false){
      this.estados[number].open =true
  
    }
    else if (this.estados[number].open  === true) {
      this.estados[number].open  =false
    }
  


  }
}
