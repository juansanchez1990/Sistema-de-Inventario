import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginUsuario } from 'src/app/feature/login/models/loginUsuario';
import { LoginService } from 'src/app/feature/login/servicios/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
redirectTo:string=''

  constructor(private loginService:LoginService, 
              activatedRoute: ActivatedRoute) 
{

this.redirectTo = activatedRoute.snapshot.data.redirectTo;
}
    usuario:any
  ngOnInit() {
   this.usuario = JSON.parse(localStorage.getItem('usuario')|| '{}');
  }

}
