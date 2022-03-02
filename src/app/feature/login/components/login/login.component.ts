import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  usuarioRecord:string=""
  usuario:any[]=[]
  formLogin: FormGroup = new FormGroup({
    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(private loginService:LoginService,
              private toastr:ToastrService,
              private router: Router) { }

  ngOnInit(): void {
    this.usuario =Object.entries(JSON.parse(localStorage.getItem('usuario')|| '{}'));
    
    
  }
  submit() {
    if (this.formLogin.valid) {
      console.log()
      
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
    else{
      this.toastr.error('¡Error!', 'Debe de ingresar todos los campos');
    }
  }
  checkCheckBoxvalue(event:any){
    let checked = event.checked
    if (checked ===true){
       this.usuarioRecord =this.usuario[2][1]
    }

    else {
      this.usuarioRecord=""
    }
 }

}






















