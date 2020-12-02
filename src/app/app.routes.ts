import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HomeComponent } from './core/home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { FavoritesComponent } from './shared/favorites/favorites.component';
import { LinksComponent } from './links/links.component';
import { CourseComponent } from './training/course/course.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'favorites', component: FavoritesComponent },
    { path: 'photos', component: PhotosComponent },
    { path: 'course/:name', component: CourseComponent },
    { path: 'links', component: LinksComponent },
    { path: '**', component: PageNotFoundComponent }
];
