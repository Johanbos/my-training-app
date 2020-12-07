import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HomeComponent } from './core/home/home.component';
import { CourseComponent } from './training/course/course.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'favorites',
        loadChildren: () => import('./favorites/favorites.module')
            .then(mod => mod.FavoritesModule)
    },
    {
        path: 'photos',
        loadChildren: () => import('./photos/photos.module')
            .then(mod => mod.PhotosModule)
    },
    { path: 'course/:name', component: CourseComponent },
    {
        path: 'links',
        loadChildren: () => import('./links/links.module')
            .then(mod => mod.LinksModule)
    },
    { path: '**', component: PageNotFoundComponent }
];
