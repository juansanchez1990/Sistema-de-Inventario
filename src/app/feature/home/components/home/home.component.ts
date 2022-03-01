import { Component, OnInit } from '@angular/core';
import { LoginUsuario } from 'src/app/feature/login/models/loginUsuario';
import { LoginService } from 'src/app/feature/login/servicios/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private loginService:LoginService) { }
    usuario:any
  ngOnInit() {
   this.usuario = JSON.parse(localStorage.getItem('usuario')|| '{}');
   console.log(this.usuario)
  }

}
