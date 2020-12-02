import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingComponent } from './training/training/training.component';
import { FormsModule } from '@angular/forms';
import { LinksComponent } from './links/links.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { PhotosComponent } from './photos/photos.component';
import { CompetenceComponent } from './training/competence/competence.component';
import { CompetencesComponent } from './training/competences/competences.component';
import { FavoritesComponent } from './shared/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetencesComponent,
    TrainingComponent,
    LinksComponent,
    LoadingComponent,
    PhotosComponent,
    CompetenceComponent,
    FavoritesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
