import { Component, OnInit } from '@angular/core';



import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRoute, Router ,Params} from '@angular/router';
import { NgForm } from '@angular/forms';
import { FbService } from 'src/app/shared/fb.service';

@Component({
  selector: 'app-new-feedback',
  templateUrl: './new-feedback.component.html',
  styleUrls: ['./new-feedback.component.css']
})
export class NewFeedbackComponent implements OnInit {

  constructor(private newfb : FbService) { }
  submitted = false;
  user = {
    empname: '',
    empid: '',
    Projname: '',
    rating: '',
    comments: ''
  };
  ngOnInit() {
  }
  onSubmit(form: NgForm) {
   // const username = form.value.email;
   // const password = form.value.password;
  //console.log(JSON.stringify(form.value));
   // this.fbcomp=form.value;
   // console.log(this.fbcomp);
   // this.newfb.addFeedBack(form.value);
    //this.authService.signinUser(email, password);
    this.submitted = true;
    this.user = form.value;
    
   // console.log(JSON.stringify(this.form.value));
   console.log();
   
   this.newfb.addFeedBack(form.value);

   
    form.reset();
   
   } 

  }

