import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Competence } from '../model/competence';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  competenceAdded$ = new Subject<Competence>();
  competenceDeleted$ = new Subject<Competence>();

  constructor() { }
}
