import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { BookingSeatComponent } from 'src/app/home/booking-seat/booking-seat.component';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit {
  @ViewChildren(BookingSeatComponent) seatComponent: QueryList<BookingSeatComponent>;
  movieScheduleDetail: any = {};
  seatList: any[] = [];
  chosenSeatList: any[] = [];
  total: number = 0;
  constructor(
    private ActiveRoute: ActivatedRoute,
    private MovieService: MovieService) { }

  ngOnInit(): void {
    this.ActiveRoute.params.subscribe({
      next: (params) => {
        this.MovieService.FetchBookingDetail(params.id).subscribe({
          next: (result) => {
            this.movieScheduleDetail = result;
            this.seatList = result.danhSachGhe;
            console.log(this.movieScheduleDetail);
          },
          error: (err) => {
            console.log(err);
          },
        });
      },
    })
  }

  SeatBooking(seat) {
    if (seat.dangChon === true) {
      this.chosenSeatList.push(seat);
    } else {
      let index = this.chosenSeatList.findIndex((chosenSeat) => chosenSeat.maGhe === seat.maGhe);
      if (index !== -1) {
        this.chosenSeatList.splice(index, 1);
      };
    };
    this.SumPrice();
  }

  CancelBooking(chosenSeat) {
    this.seatComponent.forEach((seatItem: BookingSeatComponent) => {
      if (seatItem.seat.maGhe === chosenSeat.maGhe) {
        seatItem.isPicking = false;
        seatItem.seat.taiKhoanNguoiDat = '';
        const index = this.chosenSeatList.findIndex((seat) => seat.maGhe === chosenSeat.maGhe);
        if (index !== -1) {
          this.chosenSeatList.splice(index, 1);
        };
      }
    });
    this.SumPrice();
  }

  SumPrice() {
    this.chosenSeatList.forEach((chosenSeat) => {
      this.total += parseInt(chosenSeat.giaVe, 10);
    })
  }
}
