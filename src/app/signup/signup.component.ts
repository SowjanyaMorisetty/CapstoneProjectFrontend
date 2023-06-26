
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    email:string='';
    userName:string= '';
    userPassword:string='';
    mobile:string='';
    role:string="User";
 user:User=new User();

  constructor(private service:ServiceService,private router: Router) { }
  signup(){
    this.user.email=this.email;
    this.user.userName=this.userName;
    this.user.userPassword=this.userPassword;
    this.user.mobile=this.mobile;
    this.user.role=this.role;
    this.service.signupok(this.user).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log(error);
      }
      );
      alert("Account Created")
    }
}





// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { User } from '../model/user';
// import { ServiceService } from '../service.service';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent {
//   signupForm: FormGroup
//   name!: FormControl;
//   password!:FormControl;
//   email!:FormControl;
//   mobile!:FormControl;
//   role!:FormControl;
//   user: User = new User();

//   constructor(
  
//     private service: ServiceService,
//     private router: Router,
//     private formBuilder: FormBuilder
//   ) {
//     this.signupForm = new FormGroup({
//       email: new FormControl('', [Validators.required, Validators.email]),
//       name: new FormControl('', Validators.required),
//       password: new FormControl ('', Validators.required),
//       mobile: new FormControl ('', Validators.required),
//       role: new FormControl ('user')
//     });
//   }

//   get signupFormControl() {
//     return this.signupForm.controls;
//   }

//   signup() {
  
//     if (this.signupForm.invalid) {
//       console.log("v");
//       return;
//     }

//     this.user = { ...this.signupForm.value };
//     this.service.signupok(this.user).subscribe(
//       response => {
//         console.log(response);
//         this.router.navigate(['/login']);
//       }
      
//     );
//     alert('Account Created');
//   }
// }
