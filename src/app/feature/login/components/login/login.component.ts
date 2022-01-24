import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  checked = false;
  indeterminate = false;
  form: FormGroup = new FormGroup({
    usuario: new FormControl(''),
    password: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }
  submit() {
    if (this.form.valid) {
     console.log(this.form.value)
    }
  }


}
