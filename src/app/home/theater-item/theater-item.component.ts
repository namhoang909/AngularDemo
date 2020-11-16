import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-theater-item',
  templateUrl: './theater-item.component.html',
  styleUrls: ['./theater-item.component.css']
})
export class TheaterItemComponent implements OnInit {
  @Input() theater: any;
  movieScheduleList: any = {};
  movieKeyList: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.movieScheduleList = this.theater.danhSachPhim.reduce(function (result, current) {
      result[current.maPhim] = result[current.maPhim] || [];
      result[current.maPhim].push(current);
      return result;
    }, Object.create(null));
    // https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    for(let key in this.movieScheduleList) {
      this.movieKeyList.push(key);
    };
  }

}
