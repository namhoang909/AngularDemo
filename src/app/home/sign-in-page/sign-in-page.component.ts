import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router) { }

  signInForm:FormGroup;
  ngOnInit(): void {
    this.signInForm = new FormGroup({
      'Username': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]),
      'Password': new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    })
  }

  SignInFunc(){
    console.log(this.signInForm.value);
    this.signInForm.markAllAsTouched();
    if (this.signInForm.invalid) return;

    this.auth.SignInFunc(this.signInForm.value).subscribe({
      next: (result) => {
        // Đưa thông tin user vào localstorage
        localStorage.setItem('userInfo', JSON.stringify(result));

        // Kiểm tra mã loại người dùng để chuyển trang
        // Đối tượng Router là dùng để chuyển trang trong component
        if (result.maLoaiNguoiDung === 'KhachHang') {
          this.router.navigate(['/']);
        } else {
          this.router.navigate(['/admin']);
        }
      },
    });
  }
}
