import { Auth } from '@pages/auth/services/auth';
import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage implements OnInit {

  formLogin: FormGroup = new FormGroup({});
  // router: any;
  // router: any;

  constructor(private router: Router, private auth: Auth) { }

  ngOnInit(): void {
    // Initialize form controls here
    this.formLogin = new FormGroup({
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)
      ])
    });
  }

  sendLogin(): void{
    const {email, password} = this.formLogin.value;
    this.auth.sendCredentials(email, password);
    // const body = this.formLogin.value;  
  // El FormGroup y FormControl deben ser declarados en el Login-page.ts:
    this.router.navigate(['/tracks']);
  };

  // enviar() {
  // // Validaciones o lógica
  //   this.router.navigate(['/home']);
  // }

}
