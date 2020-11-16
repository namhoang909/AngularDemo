import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieProjectComponent } from './movie-project.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { MovieTypeComponent } from './movie-type/movie-type.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { CinemaComponent } from './cinema/cinema.component';
import { PromotionComponent } from './promotion/promotion.component';
import { ReviewComponent } from './review/review.component';
import { NewsComponent } from './news/news.component';
import { NewsItemComponent } from './news-item/news-item.component';



@NgModule({
  declarations: [MovieProjectComponent, HeaderComponent, SliderComponent, MovieTypeComponent, NowPlayingComponent, UpcomingComponent, MovieItemComponent, ContactComponent, ContactFormComponent, ContactDetailComponent, CinemaComponent, PromotionComponent, ReviewComponent, NewsComponent, NewsItemComponent,],
  imports: [
    CommonModule
  ],
  exports: [MovieProjectComponent]
})
export class MovieProjectModule { }
