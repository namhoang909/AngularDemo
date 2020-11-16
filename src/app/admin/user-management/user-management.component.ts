import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit, OnDestroy {
  @ViewChild('userForm') userForm: NgForm;
  userList: User[] = [];
  addingUser: boolean = false;
  loading: boolean = false;
  errors: string[] = [];
  subscriptionUserList: Subscription;
  searchedUser: User;
  
  constructor(private UserSer: UserService, private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.subscriptionUserList = this.UserSer.GetUserList().subscribe({
      next: (result) => {
        this.userList = result;
        console.log(this.userList);
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        console.log('Get user list. Done.')
      }
    })
  }

  ChangeStatus(){
    this.addingUser = true;
  }

  UserEditing(value){
    this.addingUser = false;
    let userName = value.getAttribute('userUsername');
    let password = value.getAttribute('userPassword');
    let name = value.getAttribute('userName');
    let phone = value.getAttribute('userPhone');
    let type = value.getAttribute('userType');
    let email = value.getAttribute('userEmail');
    this.userForm.setValue({
      taiKhoan: userName,
      matKhau: password,
      hoTen: name,
      email: email,
      soDt: phone,
      maLoaiNguoiDung: type,
    })
  }

  DeleteUser(value){
    let index = this.userList.findIndex(user => user.taiKhoan === value.taiKhoan);
    if(index !== -1){
      this.userList.splice(index, 1);
      this.auth.RemoveUser(value).subscribe({
        error: (err) => {
          console.log(err)
        },
        complete: () => {
          console.log('User is removed.')
        }
      })
    }
  }

  UserEditFunc(values) {
    if (this.addingUser) {
      // adding Function addUser = false;
      this.addingUser = false;
      this.loading = true;
      this.errors = [];
      this.auth.SignUpFunc(values).subscribe({
        error: (err) => {
          this.errors = [...this.errors, err.error];
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
          this.userForm.reset();
        }
      })
    } else {
      // edit function
      let index  = this.userList.findIndex(user => user.taiKhoan === values.taiKhoan);
      if(index !== -1) {this.userList[index] = values};
      this.auth.EditAccountDetail({...values, maNhom: 'GP01'}).subscribe({
        error: (err) => {
          this.errors = [...this.errors, err.error];
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
          this.userForm.reset();
        }
      })
    }
  }

  SearchUserFunc(value){
    this.auth.SearchUser(value).subscribe({
      next: (res) => {
        this.searchedUser = res;
        console.log(this.searchedUser);
      },
      error: (err) => {
        console.log(err);
      },
      complete:() => {
        console.log("Search complete.")
      }
    })
  }
  
  ngOnDestroy(): void {
    this.subscriptionUserList.unsubscribe();
  }
}
