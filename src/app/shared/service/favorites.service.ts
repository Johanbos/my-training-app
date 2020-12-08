import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Competence } from '../model/competence';
import { add, remove } from '../stores/favorites/favorites.actions';
import { FavoritesState } from '../stores/favorites/favorites.state';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  constructor(private store: Store<FavoritesState>) { }

  add(competence: Competence) {
    // update database
    console.log("Added competence:", competence);
    this.store.dispatch(add(competence));
  }

  remove(competence: Competence) {
    // update database
    console.log("Removed competence:", competence);
    this.store.dispatch(remove(competence));
  }
}
