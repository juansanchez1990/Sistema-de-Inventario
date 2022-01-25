import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavBarService } from 'src/app/services/nav-bar.service';
import { Location } from '@angular/common'
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public LinkNombre: string = "";
  private historial: string[] = []
  nombre!: string
  IconoMenu!: boolean;
  @Output() openMenu = new EventEmitter();
  @Input() descripcion:string = '';
  @Input() showMenuButton = true;
  @Input() showBackButton = false;
  
  constructor(private navbarService: NavBarService,
              private location: Location,
              private router: Router
  ) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.historial.push(event.urlAfterRedirects)
      }
    })


   }

  ngOnInit(): void {
 
this.nombre = this.descripcion;
   
  }
 
  back(): void {
    this.historial.pop()
    if (this.historial.length >= 0) {
      this.location.back()                      
        this.LinkNombre = String(this.router.url).substring(1);     
      this.nombre = this.LinkNombre

    } else {
      this.router.navigateByUrl('/')
    }
  }

  onOpenMenu(){
    this.openMenu.emit();
  }

}
