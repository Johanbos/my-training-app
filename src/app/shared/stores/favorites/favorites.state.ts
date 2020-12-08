// cities.state.ts - defining the interface for our cities in the store

import { Competence } from '../../model/competence';

export interface FavoritesState {
    favorites: Competence[]
}

export const initialState: Competence[] = [];
