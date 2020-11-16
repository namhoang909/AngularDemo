import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserService} from '../../services/user.service';
import {User} from '../../core/models/user';
import {AuthenticationService} from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
  @ViewChild('signUpForm') sUForm: NgForm;
  // userList: User[] = [];
  loading: boolean = false;
  errors: string[] = [];
  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    // this.UserSer.GetUserList().subscribe({
    //   next: (result) => {
    //     this.userList = result;
    //     console.log(this.userList);
    //   },
    //   error: (err) => {
    //     console.log(err)
    //   },
    //   complete: () => {
    //     console.log('Get users. Done.')
    //   }
    // })
  }

  // SignUp(value){
  //   console.log(this.signUpUserArr);
  //   this.signUpUserArr.push(value);
  //   this.sUForm.reset();
  // }

  checkDirtyForm() {
    return this.sUForm.dirty;
  }

  SignUpFunc(values){
    this.loading = true;
    this.errors = [];
    let user = {...values, maLoaiNguoiDung: "KhachHang"}
    console.log(user);
    this.auth.SignUpFunc(user).subscribe({
      error: (err) => {
        this.errors = [...this.errors, err.error];
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
        this.sUForm.reset();
        this.router.navigate(['/']);
      }
    })
  }

  // UserEditing(value){
  //   let userName = value.getAttribute('userUsername');
  //   let password = value.getAttribute('userPassword');
  //   let name = value.getAttribute('userName');
  //   let phone = value.getAttribute('userPhone');
  //   let type = value.getAttribute('userType');
  //   let email = value.getAttribute('userEmail');
  //   this.sUForm.setValue({
  //     userName: userName,
  //     password: password,
  //     name: name,
  //     email: email,
  //     phone: phone,
  //     userType: type,
  //   })
  // }
}
