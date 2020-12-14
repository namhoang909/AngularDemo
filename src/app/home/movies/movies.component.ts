import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movies } from 'src/app/core/models/movies';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {
  movieList: Movies[] = [];
  subscriptionMovieList: Subscription;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.subscriptionMovieList = this.movieService.GetMovieList().subscribe({
      next: (result) => {
        this.movieList = result;
        console.log(result);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Get movie list. Complete.');
      }
    })
  }

  SearchMovie(movieName) {
    let nameSearch = movieName.toLowerCase();
    this.movieService.SearchMovie(nameSearch).subscribe({
      next: (result) => {
        this.movieList = result;
        console.log(result);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  ngOnDestroy(): void {
    // this.subscriptionMovieList.unsubscribe();
  }
}
