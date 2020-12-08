import { Action, createReducer, on } from '@ngrx/store';
import { add, remove, reset } from './favorites.actions';
import { initialState } from './favorites.state';

// todo payload
const reducer = createReducer(initialState,
  on(add, (state, competence) => [...state, competence]),
  on(remove, (state, competence) => state.filter(i => i.name != competence.name)),
  on(reset, _ => initialState)
);

export const favoritesReducer = (state = initialState, action: Action) => {
  return reducer(state, action);
};
export const favoritesFeatureKey = 'favorites';