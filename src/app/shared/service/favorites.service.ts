import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Competence } from '../model/competence';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  competenceAdded$ = new ReplaySubject<Competence>();

  constructor() { }
}
