import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Movies } from 'src/app/core/models/movies';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movie: Movies;
  @ViewChild('editMovieForm') editMovieForm: NgForm;
  @Output() DeleteMovie = new EventEmitter();
  constructor(private movieSer: MovieService) { }

  ngOnInit(): void {
  }

  MovieEditing(value){
    let maPhim = value.getAttribute("maPhim");
    let tenPhim = value.getAttribute("tenPhim");
    let ngayKhoiChieu = value.getAttribute("ngayKhoiChieu");
    let trailer = value.getAttribute("trailer");
    let biDanh = value.getAttribute("biDanh");
    let moTa = value.getAttribute("moTa");
    let danhGia = value.getAttribute("danhGia");
    let hinhAnh = value.getAttribute("hinhAnh");
    this.editMovieForm.setValue({
      maPhim: maPhim,
      tenPhim: tenPhim,
      biDanh: biDanh,
      ngayKhoiChieu: ngayKhoiChieu,
      trailer: trailer,
      moTa: moTa,
      danhGia: danhGia,
      hinhAnh: hinhAnh,
    })
  }

  EditMovieDetail(values) {
    this.movieSer.EditMovieFunc(values).subscribe({
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        console.log('Movie has been edited.')
      }
    })
  }

  DeleteMovieFunc(values) {
    const maPhim = this.movie.maPhim;
    this.DeleteMovie.emit(maPhim);
  }
}
