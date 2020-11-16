import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User} from '../core/models/user';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private api: ApiService
    ) { }

  GetUserList():Observable<User[]>{
    return this.http.get<User[]>(
      'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01'
    )
  }
  
}
