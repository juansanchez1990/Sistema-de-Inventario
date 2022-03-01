import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginUsuario } from '../../models/loginUsuario';
import { LoginService } from '../../servicios/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  checked = false;
  indeterminate = false;
  usuario:LoginUsuario[]=[]
  formLogin: FormGroup = new FormGroup({
    usuario: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private loginService:LoginService,
              private toastr:ToastrService,
              private router: Router) { }

  ngOnInit(): void {
  }
  submit() {
    if (this.formLogin.valid) {

      
     try{


     let   usuario=this.formLogin.value['usuario']
     let  password = this.formLogin.value['password']

      this.loginService.InicioSesion(usuario,password).subscribe(user=>{
        this.toastr.success('¡Hecho!', 'Inicio de sesión exitoso');
        this.loginService.EnviarUsuario(user);
        this.router.navigate(['Home']);
      }, (error:any) => {
       
      this.toastr.error('¡Error!', `${error.error.Message}`);
      }
      )
     }
     catch{

     }

    }
  }


}






















