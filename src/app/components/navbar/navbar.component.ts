import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavBarService } from 'src/app/services/nav-bar.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private navbarService:NavBarService) { }

  ngOnInit(): void {
  }
  clickMenu() { 
    this.navbarService.toggle();
  }
}
