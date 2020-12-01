import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor() { }

  getLinks() : string[] {
    return [
      'https://angular.io/guide/cheatsheet',
      'https://github.com/PeterKassenaar/voorbeeldenAngular2',
    ]
  }
}
