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
            this.LoadingScreen();
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

  LoadingScreen() {
    setTimeout(this.ShowPage, 2000);
  }

  ShowPage() {
    // https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_loader5
    // https://www.geeksforgeeks.org/how-to-display-spinner-on-the-screen-till-the-data-from-the-api-loads-using-angular-8
    document.getElementById("loading").style.display = "none";
    document.getElementById("loaded").style.display = "block"
  }
}
