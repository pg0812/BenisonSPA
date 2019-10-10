import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LogiAuthService } from './logi-auth.service';
import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRoute, Router ,Params} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private loginService : LogiAuthService,
    private route: ActivatedRoute,
    private router: Router) { }
  Designation : string;
  ngOnInit() {
  }
  onSignin(form: NgForm) {
    const username = form.value.email;
    const password = form.value.password;
    //this.authService.signinUser(email, password);
   
    this.Designation= this.loginService.loginUser(username,password);
    console.log(this.Designation);
    if(this.Designation=='Employee')
    this.router.navigate(['employee']);
    if(this.Designation=='Manager')
    this.router.navigate(['manager']);
 

  }

}
