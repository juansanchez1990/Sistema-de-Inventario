import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../models/usuario';
import { RegistroService } from '../../servicios/registro.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.scss']
})
export class RegistrarUsuarioComponent implements OnInit {
  Administrador:number=0;
  RegistroForm = new FormGroup({
    NombreCompleto: new FormControl('', Validators.required),
    Usuario: new FormControl('',Validators.required),
    Contraseña: new FormControl('',[Validators.required, Validators.minLength(6)]),
  });

  constructor(private RegistrarServicio:RegistroService,
              private toastr: ToastrService) { }

  ngOnInit() {

  

  }
  submit() {
    if (this.RegistroForm.valid) {
        try{
      
        let usuario:Usuario={
          NombreCompleto:this.RegistroForm.value['NombreCompleto'],
          Usuario1:this.RegistroForm.value['Usuario'],
          Contraseña:this.RegistroForm.value['Contraseña'],
          IdRol:this.Administrador,
          Activo:true
  
        }
        this.RegistrarServicio.RegistrarUsuario(usuario).subscribe(data=>{
  
          this.toastr.success('¡Hecho!', 'Usuario Registrado');
          this.RegistroForm.reset();
        }, (error:any) => {
          console.log(error)
        this.toastr.error('¡Error!', `${error.error.Message}`);
   
      }
        )
  
      }
  
       
      catch{
        
      }
    }
    else {
      this.toastr.error('¡Error!', 'Tiene que llenar todos los campos');
    }

  
  }

  checkCheckBoxvalue(event:any){
    let checked = event.checked
    if (checked ===true){
      this.Administrador = 1
    }

    else {
      this.Administrador = 0;
    }
 }
}


