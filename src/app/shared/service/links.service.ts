import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor(private httpClient: HttpClient) { }

  getLinks(): Observable<string[]> {
    return this.httpClient.get<string[]>('/assets/data/links.json')
      .pipe(
        delay(1000)
      );
  }
}
