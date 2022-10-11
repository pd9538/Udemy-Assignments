import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') userForm:NgForm;
  subscription='advance';
  user={
    email:'',
    subscription:'',
    password:''
  }
  submitted=false;

  onSubmit(){
    this.submitted=true;
    this.user.email=this.userForm.value.email;
    this.user.subscription=this.userForm.value.subscription;
    this.user.password=this.userForm.value.password;
  }
}
