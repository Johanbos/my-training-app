import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { FavoritesComponent } from './favorites/favorites/favorites.component';
import { LinksModule } from './links/links.module';
import { LinksComponent } from './links/links/links.component';
import { PhotosModule } from './photos/photos.module';
import { PhotosComponent } from './photos/photos/photos.component';
import { CompetenceComponent } from './training/competence/competence.component';
import { CompetencesComponent } from './training/competences/competences.component';
import { CourseComponent } from './training/course/course.component';
import { CoursesComponent } from './training/courses/courses.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    CompetencesComponent,
    CourseComponent,
    LinksComponent,
    PhotosComponent,
    CompetenceComponent,
    FavoritesComponent,
    PageNotFoundComponent,
    HomeComponent,
    CoursesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    LinksModule,
    PhotosModule,
    NgbModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
