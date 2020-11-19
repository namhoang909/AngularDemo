import { Component, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Movies } from 'src/app/core/models/movies';
import { MovieService } from 'src/app/services/movie.service';
import {MovieItemComponent} from 'src/app/admin/movie-item/movie-item.component';

@Component({
  selector: 'app-movie-control',
  templateUrl: './movie-control.component.html',
  styleUrls: ['./movie-control.component.css']
})
export class MovieControlComponent implements OnInit, OnDestroy {
  movieList: Movies[] = [];
  subscriptionMovieList: Subscription;
  @ViewChild('addMovieForm') addMovieForm: NgForm;
  @ViewChildren(MovieItemComponent) movieItemComponent: QueryList<MovieItemComponent>;
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

  DeleteMovieFunc(maPhim: any){
    let index = this.movieList.findIndex((movie) => movie.maPhim === maPhim);
    if(index !== -1){
      this.movieList.splice(index, 1);
      this.movieService.DeleteMovie(maPhim).subscribe({
        error: (err) => {
          alert("error " + err)
          console.log(err);
        },
        complete: () => {
          alert("Xoa phim thanh cong.")
          console.log("Code's movie (" + maPhim + ") has been deleted");
        }
      })
    }
  }

  AddMovieFunc(values){
    console.log(values);
    this.movieService.AddMovieFunc({...values, maNhom: "GP01"}).subscribe({
      next: (result) => {
        alert("Movie is added.")
        let frm = new FormData();
        frm.append('File', values.hinhAnh, values.tenPhim);
        frm.append('tenphim', values.tenPhim);
        frm.append('manhom', 'GP01');
        this.movieService.PictureEditing(frm).subscribe({
          next: (result) => {
            console.log("Picture has been added.")
          },
          error: (err) => {
            alert("error " + err + " can not add image.")
          }
        })
      },
      error: (err) => {
        alert("Error " + err);
        console.log(err);
      }
    })
  }

  ngOnDestroy(): void {
    this.subscriptionMovieList.unsubscribe();
  }
}
