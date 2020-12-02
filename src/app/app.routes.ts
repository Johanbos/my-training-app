import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HomeComponent } from './core/home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { FavoritesComponent } from './shared/favorites/favorites.component';
import { TrainingComponent } from './training/training/training.component';
import { LinksComponent } from './links/links.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'favorites', component: FavoritesComponent },
    { path: 'photos', component: PhotosComponent },
    { path: 'course/:name', component: TrainingComponent },
    { path: 'links', component: LinksComponent },
    { path: '**', component: PageNotFoundComponent }
];
