import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavBarService } from './services/nav-bar.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

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
  constructor(private navBarService:NavBarService) { 
  }
  ngAfterViewInit(): void {
    this.navBarService.setSidenav(this.sidenav);
  }

  ngOnInit(): void {
    console.log('Open', this.Open)  
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
