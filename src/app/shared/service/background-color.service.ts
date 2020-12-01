import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackgroundColorService {
  value$ = new Subject<string>();

  constructor() { }
}
