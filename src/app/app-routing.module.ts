import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

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
  {
    path: 'courses',
    loadChildren: () => import('./training/training.module')
      .then(mod => mod.TrainingModule)
  },
  {
    path: 'links',
    loadChildren: () => import('./links/links.module')
      .then(mod => mod.LinksModule)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
