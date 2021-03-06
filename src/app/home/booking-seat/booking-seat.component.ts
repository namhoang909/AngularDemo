import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { of } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-booking-seat',
  templateUrl: './booking-seat.component.html',
  styleUrls: ['./booking-seat.component.css']
})
export class BookingSeatComponent implements OnInit {
  @Input() seat;
  @Output() emitSeat = new EventEmitter();
  currentUser: any = {};
  seatType: boolean = false;
  isPicking: boolean = false;
  isSignIn: boolean = false;

  constructor(private AuthenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.currentUser = this.AuthenticationService.currentUser;
    for(let key in this.currentUser) {
      if(this.currentUser.hasOwnProperty(key)){
        this.isSignIn = true;
      };
    };
    if(this.seat.loaiGhe !== "Thuong") {
      this.seatType = true;
    };
  }

  SeatBooking() {
    this.isPicking = !this.isPicking;
    const pickingSeat = {
      ...this.seat,
      dangChon: this.isPicking,
    }
    if(this.isPicking == true){
      this.emitSeat.emit({...pickingSeat, taiKhoanNguoiDat: this.currentUser.taiKhoan});
    } else {
      this.emitSeat.emit({...pickingSeat, taiKhoanNguoiDat: ''});
    };
  }

}
