import { Action, createReducer, on } from '@ngrx/store';
import { Competence } from '../../model/competence';
import { add, remove, reset } from './favorites.actions';
import { FavoritesState, initialState } from './favorites.state';

export const favoritesStateFeatureKey = 'favoritesState';

const reducer = createReducer(initialState,
  on(add, (state, competence) => onAdd(state, competence)),
  on(remove, (state, competence) => onRemove(state, competence)),
  on(reset, _ => initialState)
);

export const favoritesReducer = (state = initialState, action: Action) => {
  return reducer(state, action);
};


function onRemove(state: FavoritesState, competence: Competence): FavoritesState {
  let newFavorites = state.favorites.filter(i => i.name != competence.name);
  return { ...state, favorites: newFavorites };
}

function onAdd(state: FavoritesState, competence: Competence): FavoritesState {
  let newFavorites = [...state.favorites, competence];
  return { ...state, favorites: newFavorites };;
}
