import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { ForbiddenComponent } from './core/forbidden/forbidden.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { FlaggedPreloadingStrategyService } from './flagged.preloading-strategy';
import { NeverActivateGuard } from './never-activate.guard';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: "full" },
  { path: 'forbidden', component: ForbiddenComponent, canActivate: [NeverActivateGuard] },
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
      .then(mod => mod.LinksModule),
    data: {
      preload: true
    }
  },
  { path: '**', component: PageNotFoundComponent }
];

const extraRouterOptions: ExtraOptions = {
  preloadingStrategy: FlaggedPreloadingStrategyService
};

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, extraRouterOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
