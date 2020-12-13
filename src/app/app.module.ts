import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercise1Module } from './exercise1/exercise1.module';
import { Exercise2Module } from './exercise2/exercise2.module';
import { DemoModule } from './demo/demo.module';
import { DirectivesModule } from './directives/directives.module';
import { MovieProjectModule } from './movie-project/movie-project.module';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/core/interceptors/auth.interceptor';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoItemComponent } from './to-do-list/to-do-item/to-do-item.component';
import { SafePipe } from './services/pipe/safe.pipe';
import { RandomGameComponent } from './random-game/random-game/random-game.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoItemComponent,
    SafePipe,
    RandomGameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Exercise1Module,
    Exercise2Module,
    DemoModule,
    DirectivesModule,
    MovieProjectModule,
    HomeModule,
    AdminModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
