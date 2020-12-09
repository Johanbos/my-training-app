import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { LoadingComponent } from './loading/loading.component';
import { MenuComponent } from './menu/menu.component';
import { favoritesStateFeatureKey, favoritesReducer } from './stores/favorites/favorites.reducer';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature(favoritesStateFeatureKey, favoritesReducer),
  ],
  declarations: [
    LoadingComponent,
    MenuComponent
  ],
  exports: [
    LoadingComponent,
    MenuComponent
  ]
})
export class SharedModule { }
