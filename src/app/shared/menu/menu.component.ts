import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { favoritesStateFeatureKey } from '../stores/favorites/favorites.reducer';
import { FavoritesState } from '../stores/favorites/favorites.state';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  favoritesNumber$: Observable<number> | undefined;

  constructor(private store: Store<{ [favoritesStateFeatureKey]: FavoritesState }>) { }

  ngOnInit(): void {
    this.favoritesNumber$ = this.store.pipe(
      map(state => state.favoritesState.favorites.length),
    )
  }
}
