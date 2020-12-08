// cities.state.ts - defining the interface for our cities in the store

import { Competence } from '../../model/competence';

export interface FavoritesState {
    favorites: Competence[],
    loading: boolean
}

export const initialState: Competence[] = [];
/* export const initialState: FavoritesState = {
    favorites: [],
    loading: false
}; */
