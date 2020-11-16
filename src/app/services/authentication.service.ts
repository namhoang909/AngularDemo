import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject = new BehaviorSubject({});
  currentUser = this.currentUserSubject.asObservable();

  constructor(private api: ApiService) { }

  InitCurrentUser(){
    const user = localStorage.getItem('userInfo');
    if (user) {
      this.currentUserSubject.next(JSON.parse(user));
    }
  }

  SignUpFunc(values: any): Observable<any> {
    return this.api.post('QuanLyNguoiDung/DangKy', {
      ...values,
      maNhom: 'GP01',
    });
  }

  SignInFunc(values: any): Observable<any> {
    return this.api.post('QuanLyNguoiDung/DangNhap', values).pipe(
      tap((result) => {
        // next để cập nhật giá trị mới
        this.currentUserSubject.next(result);
      })
    );
  }

  // Thông tin cá nhân, xem lịch sử đặt vé
  GetAccountDetail(userName: any): Observable<any> {
    return this.api.post('QuanLyNguoiDung/ThongTinTaiKhoan', userName);
  }

  // Thay đổi thông tin cá nhân
  EditAccountDetail(values: any): Observable<any> {
    return this.api.put('QuanLyNguoiDung/CapNhatThongTinNguoiDung', values);
  }

  // Xóa người dùng
  RemoveUser(value): Observable<any> {
    return this.api.delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${value}`);
  }

  // Tìm người dùng
  SearchUser(value: any): Observable<any> {
    return this.api.get(`QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${value}`);
  }
}
