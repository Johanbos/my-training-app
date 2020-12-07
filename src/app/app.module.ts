import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoadingComponent } from './shared/loading/loading.component';
import { PhotosComponent } from './photos/photos.component';
import { CompetenceComponent } from './training/competence/competence.component';
import { CompetencesComponent } from './training/competences/competences.component';
import { FavoritesComponent } from './shared/favorites/favorites.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HomeComponent } from './core/home/home.component';
import { MenuComponent } from './core/menu/menu.component';
import { CoursesComponent } from './training/courses/courses.component';
import { CourseComponent } from './training/course/course.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LinksComponent } from './links/links/links.component';
import { LinksModule } from './links/links.module';

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
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
