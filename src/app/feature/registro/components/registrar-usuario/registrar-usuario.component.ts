import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.scss']
})
export class RegistrarUsuarioComponent implements OnInit {
  checked = false;
  indeterminate = false;
  form: FormGroup = new FormGroup({
    nombreCompleto: new FormControl(''),
    usuario: new FormControl(''),
    password: new FormControl(''),
    celular: new FormControl(''),
    correo: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }
  submit() {
    if (this.form.valid) {
     console.log(this.form.value)
    }
  }
  changeCheckbox(event:Event){
    console.log(event.target)
 }
}
