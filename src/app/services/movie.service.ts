import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Movies} from '../core/models/movies';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient,
    private api: ApiService
    ) { }

  GetMovieList():Observable<Movies[]>{
    return this.http.get<Movies[]>(
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01'
    )
  }

  GetMovieDetail(maPhim: string): Observable<any> {
    return this.http.get<any>(
      `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`
    );
  }

  FetchMovieDetail(maPhim: any):  Observable<any> {
    return this.api.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  }
  
  // Lấy thông tin lịch chiếu theo phim và hệ thống rạp
  FetchMovieSchedule(maPhim: any): Observable<any> {
    return this.api.get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);
  }

  // tìm kiếm phim
  SearchMovie(tenPhim: any): Observable<any> {
    return this.api.get(`QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${tenPhim}`);
  }

  // Lấy thông tin hệ thống rạp
  FetchTheaterSystemList(): Observable<any> {
    return this.api.get('QuanLyRap/LayThongTinHeThongRap');
  }

  FetchTheaterScheduleSystemList(): Observable<any> {
    return this.api.get('QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01');
  }
  
  // Lấy thông tin lịch chiếu theo cụm rạp và hệ thống rạp 
  FetchTheaterSchedule(theaterSystemId: any): Observable<any> {
    return this.api.get(`QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${theaterSystemId}&maNhom=GP01`);
  }

  // Lấy chi tiết phòng vé
  FetchBookingDetail(maLichChieu: any): Observable<any> {
    return this.api.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
  }

  // Xóa phim
  DeleteMovie(maPhim: any): Observable<any> {
    return this.api.delete(`QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
  }

  // Thêm || sửa hình ảnh
  PictureEditing(value: any): Observable<any> {
    return this.api.post('QuanLyPhim/UploadHinhAnhPhim', value);
  }

  // thêm phim
  AddMovieFunc(values): Observable<any> {
    return this.api.post('QuanLyPhim/ThemPhim', values);
  }

  // Sửa chi tiết phim
  EditMovieFunc(values): Observable<any> {
    return this.api.post('QuanLyPhim/CapNhatPhim', values);
  }
}
