import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Schedule } from '../model/schedule';
import { User } from '../model/user';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string='';
  userName:string= '';
  userPassword:string='';
  mobile:string='';
  role:string='';
user:User=new User();
// user1:User[]=[];
constructor(private service:ServiceService,private router: Router) { 
}
login(){
  this.user.userName=this.userName;
  this.user.userPassword=this.userPassword;
  this.service.loginok(this.user).subscribe(
    (data:User) => {
      // console.log(data);
      if(data.role==="User"){
        this.router.navigate(['/searchpage']);
      }
      else if(data.role==="Admin"){
              this.router.navigate(['/mainhomepage']);
            }
        },
        (error: HttpErrorResponse) => { // Add error parameter and handle the error here
          if (error.status === 401) {
            alert('Invalid credentials');
          }
  })}
}
