import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-theaters',
  templateUrl: './theaters.component.html',
  styleUrls: ['./theaters.component.css']
})
export class TheatersComponent implements OnInit, OnDestroy {
  theaterSystemList: any[] = [];
  theaterSystemSubscription: Subscription;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.theaterSystemSubscription = this.movieService.FetchTheaterScheduleSystemList().subscribe({
      next: (result) => {
        this.theaterSystemList = result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnDestroy(): void {
    this.theaterSystemSubscription.unsubscribe();
  }
}
