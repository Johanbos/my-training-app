import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { MenuComponent } from './core/menu/menu.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { FavoritesComponent } from './favorites/favorites/favorites.component';
import { LinksModule } from './links/links.module';
import { LinksComponent } from './links/links/links.component';
import { PhotosModule } from './photos/photos.module';
import { PhotosComponent } from './photos/photos/photos.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { CompetenceComponent } from './training/competence/competence.component';
import { CompetencesComponent } from './training/competences/competences.component';
import { CourseComponent } from './training/course/course.component';
import { CoursesComponent } from './training/courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetencesComponent,
    CourseComponent,
    LinksComponent,
    LoadingComponent,
    PhotosComponent,
    CompetenceComponent,
    FavoritesComponent,
    PageNotFoundComponent,
    HomeComponent,
    MenuComponent,
    CoursesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    LinksModule,
    PhotosModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
