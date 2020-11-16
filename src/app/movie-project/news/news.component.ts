import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsType: string = "Cine"
  constructor() { }

  NewsTypeDisplay(news){
    this.newsType =news;
  }
  
  ngOnInit(): void {
  }

}
