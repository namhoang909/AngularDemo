import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import {faStar} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  movieDetail: any = {};
  theaterSystem: any = [];
  movieDetailSchedule: any[] = [];
  faStar = faStar;
  
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private MovieService: MovieService,
  ) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe({
      next: (params) => {
        this.MovieService.GetMovieDetail(params.id).subscribe({
          next: (result) => {
            this.movieDetail = result;
            this.movieDetailSchedule = this.movieDetail.lichChieu;
            console.log(this.movieDetailSchedule);
          }
        });
        this.MovieService.FetchMovieSchedule(params.id).subscribe({
          next: (result) => {
            this.theaterSystem = result.heThongRapChieu;
          }
        });
      }
    })
  }

}
