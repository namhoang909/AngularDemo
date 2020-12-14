import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { SeatBookingComponent } from './seat-booking/seat-booking.component';
import { SeatListComponent } from './seat-list/seat-list.component';
import { EditSeatListComponent } from './edit-seat-list/edit-seat-list.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { MovieTypeComponent } from './movie-type/movie-type.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { SignUpGuard } from '../core/guards/sign-up.guard';
import { SignInGuard } from '../core/guards/sign-in.guard';
import { NewsComponent } from './news/news.component';
import { CinemaComponent } from './cinema/cinema.component';
import { PromotionComponent } from './promotion/promotion.component';
import { ReviewComponent } from './review/review.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { MoviesComponent } from './movies/movies.component';
import { EditInfoComponent } from './edit-info/edit-info.component';
import { DetailPageSystemComponent } from './detail-page-system/detail-page-system.component';
import { DetailTheaterComponent } from './detail-theater/detail-theater.component';
import { DetailScheduleComponent } from './detail-schedule/detail-schedule.component';
import { TheatersComponent } from './theaters/theaters.component';
import { TheaterSystemComponent } from './theater-system/theater-system.component';
import { TheaterItemComponent } from './theater-item/theater-item.component';
import { BookingSeatComponent } from './booking-seat/booking-seat.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {path: '', component: HomePageComponent},
      {path: 'movies', component: MoviesComponent},
      {path: 'detail/:id', component: DetailPageComponent},
      {path: 'booking', component: SeatListComponent},
      {path: 'seatbooking/:id', component: BookingPageComponent},
      {path: 'signin', component: SignInPageComponent},
      {path: 'signup', component: SignUpPageComponent, /*canDeactivate: [SignUpGuard]*/},
      {path: 'editInfo', component: EditInfoComponent, canActivate: [SignInGuard]}, 
    ]
  }
]

@NgModule({
  declarations: [
    HomeLayoutComponent,
    DetailPageComponent,
    HomePageComponent,
    BookingPageComponent,
    HeaderComponent,
    FooterComponent,
    MovieItemComponent,
    SeatBookingComponent,
    SeatListComponent,
    EditSeatListComponent,
    SignInPageComponent,
    SignUpPageComponent,
    SliderComponent,
    MovieTypeComponent,
    UpcomingComponent,
    NowPlayingComponent,
    NewsComponent,
    CinemaComponent,
    PromotionComponent,
    ReviewComponent,
    NewsItemComponent,
    MoviesComponent,
    EditInfoComponent,
    DetailPageSystemComponent,
    DetailTheaterComponent,
    DetailScheduleComponent,
    TheatersComponent,
    TheaterSystemComponent,
    TheaterItemComponent,
    BookingSeatComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  exports: [
    HomeLayoutComponent,
    DetailPageComponent,
    HomePageComponent,
    BookingPageComponent,
    HeaderComponent,
    FooterComponent,
    MovieItemComponent,
    SeatListComponent,
    EditSeatListComponent,
    SignInPageComponent,
    SignUpPageComponent,
  ],
})
export class HomeModule {}
