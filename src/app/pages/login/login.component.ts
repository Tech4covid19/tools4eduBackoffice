import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import gql  from 'graphql-tag';
import { Router } from '@angular/router';
import { ApolloError } from 'apollo-boost';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm : FormGroup;

  private isValidEmail    : boolean = true;
  private isValidPassword : boolean = true;

  constructor(private formBuilder : FormBuilder, private authService : AuthService, private router : Router) {

    this.loginForm = this.formBuilder.group({
      email               : ['', [Validators.required, Validators.email]],
      password            : ['', Validators.required]
     // rememberMeCheckBox  : [false]

    })
  }
  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }

  loginSubmit(form){
    if(form && form.valid){
      //form is valid, so we can procced to login
      this.authService.login(/* form.value.email, form.value.password */ "ZOOM")
                      .subscribe(res => {
                        console.log(res);
                        this.router.navigate(['/dashboard'])
                      },
                      (error) => {
                        console.log(error);
                      })
                      

    }else{
      //form is invalid, alert something's wrong
    }


  }

  checkIsValidEmail(){
    console.log(this.email);
    if(this.email.errors){
      this.isValidEmail = (!this.email.errors?.required && !this.email.errors?.email);
    }else{
      this.isValidEmail = true;
    }
  }

  checkIsValidPassword(){
    if(this.password.errors){
      this.isValidPassword = !this.password.errors.required;
    }else{
      this.isValidPassword = true;
    }
  }

  ngOnInit() {
   /*  if(form && form.invalid){

    }else{
      console.log("Form is invalid");
      return ;
    } */

  }
  ngOnDestroy() {
  }

  

}
