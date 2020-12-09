import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Competence } from 'src/app/shared/model/competence';
import { FavoritesService } from 'src/app/shared/service/favorites.service';
import { favoritesStateFeatureKey } from 'src/app/shared/stores/favorites/favorites.reducer';
import { FavoritesState } from 'src/app/shared/stores/favorites/favorites.state';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites$: Observable<Competence[]> | undefined;

  constructor(private store: Store<{ [favoritesStateFeatureKey]: FavoritesState }>, private favoritesService: FavoritesService) { }

  ngOnInit(): void {
    this.favorites$ = this.store.pipe(
      select(state => state.favoritesState.favorites),
      tap(state => console.log(state)),
    );
  }

  deleteFavorite(competence: Competence) {
    this.favoritesService.remove(competence);
  }

  get averageRate$(): Observable<number> {
    return this.favorites$!.pipe(
      map(list => {
        const rated = list.filter(item => item.rate);
        const total = rated.reduce((acc, item) => acc + (item.rate || 0), 0);
        return total / rated.length;
      })
    );
  }
}
