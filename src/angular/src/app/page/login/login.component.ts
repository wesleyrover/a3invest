import { NgClass, NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Validators, FormBuilder, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgClass, NgStyle],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router,) {

  }
  public userForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.router.navigateByUrl("/ativo");
    }
  }

  aplicaCssErro(campo: string) {
    console.log(this.verificaValidTouched(campo));
    if(!this.userForm.valid){ return 'has-error'}
    return '';
  }

  verificaValidTouched(campo: string) {
    return (
      this.userForm.get(campo)?.invalid && (this.userForm.get(campo)?.touched || this.userForm.get(campo)?.dirty)
    );
  }
}
