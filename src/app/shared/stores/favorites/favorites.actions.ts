import { createAction, props } from '@ngrx/store';
import { Competence } from '../../model/competence';

export const add = createAction('favorite - add', props<Competence>());
export const remove = createAction('favorite - remove', props<Competence>());
export const reset = createAction('favorite - reset');
