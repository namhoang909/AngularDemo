import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {
  DanhSachKhuyenMai = [
    {TieuDeTinTuc:"Khuyến Mãi 1",HinhAnh:'https://media.vietteltelecom.vn/upload/ckfinder/images/3112.png'},
    {TieuDeTinTuc:"Khuyến Mãi 2",HinhAnh:'https://topshare.s3.amazonaws.com/production/posts/pictures/000/000/145/original/kichi-kichi-khuyen-mai.jpg?1502809882'},
    {TieuDeTinTuc:"Khuyến Mãi 3",HinhAnh:'http://giaydantuong365.com/uploads/user/2/khuyenmaigiay/khuyen-mai-giay-dan-tuong-dep-gia-re-cuc-soc.jpg'}, 
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
