import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {Movies} from 'src/app/core/models/movies';
import {MovieService} from 'src/app/services/movie.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {
  movieList: Movies[] = [];
  subscriptionMovieList: Subscription;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.subscriptionMovieList = this.movieService.GetMovieList().subscribe({
      next: (result) => {
        this.movieList = result;
        console.log(result)
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Get movie list. Complete.');
      }
    })
  }

  ngOnDestroy(): void {
    this.subscriptionMovieList.unsubscribe();
  }
}
