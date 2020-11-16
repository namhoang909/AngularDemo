import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/core/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {
  @ViewChild('editUserForm') editUserForm: NgForm;
  currentUser: any = {};
  loading: boolean = false;
  errors: string[] = [];
  bookingHistory: any[] = [];

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.auth.currentUser.subscribe({
      next: (result) => {
        this.currentUser = result;
      }
    })

    this.auth.GetAccountDetail(this.currentUser.taiKhoan).subscribe({
      next: (result) => {
        this.bookingHistory = result.thongTinDatVe;
      }
    })
  }

  InfoToForm() {
    this.editUserForm.setValue(
      {
        taiKhoan: this.currentUser.taiKhoan,
        hoTen: this.currentUser.hoTen,
        email: this.currentUser.email,
        matKhau: this.currentUser.matKhau,
        soDt: this.currentUser.soDt,
      }
    )
  }

  EditInfo(values){
    this.loading = true;
    this.auth.EditAccountDetail({...this.currentUser, values}).subscribe({
      next: (result) => {
        console.log("Thay đổi thông tin thành công");
        this.loading = false;
        this.editUserForm.reset();
      },
      error: (err) => {
        this.errors = [...this.errors, err.error];
        this.loading = false;
      },
    })
  }

}
