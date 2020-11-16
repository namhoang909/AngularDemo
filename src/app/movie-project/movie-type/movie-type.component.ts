import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-type',
  templateUrl: './movie-type.component.html',
  styleUrls: ['./movie-type.component.css']
})
export class MovieTypeComponent implements OnInit {
  nowPlayingStatus:boolean = true;

  constructor() { }

  nowPlayingDisplay(){
    this.nowPlayingStatus = true;
  }
  upcomingDisplay(){
    this.nowPlayingStatus = false;
  }
  ngOnInit(): void {
  }

}
