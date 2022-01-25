import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavBarService } from 'src/app/services/nav-bar.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  nombre!: string
  IconoMenu!: boolean;
  @Output() openMenu = new EventEmitter();
  @Input() descripcion:string = '';
  @Input() showMenuButton = true;
  @Input() showBackButton = false;
  
  constructor(private navbarService: NavBarService,
    private location: Location,
  ) { }

  ngOnInit(): void {
this.nombre = this.descripcion;
   
  }
  clickMenu() {
    this.navbarService.toggle();
  }
  back(): void {
    this.navbarService.back()
  }

  onOpenMenu(){
    this.openMenu.emit();
  }

}
