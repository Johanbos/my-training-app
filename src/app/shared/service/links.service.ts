import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  private apiUrl = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) { }

  getLinks(): Observable<string[]> {
    return this.httpClient.get<string[]>('/assets/data/links.json')
      .pipe(
        delay(1000)
      );
  }

  getLinksApi(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.apiUrl + 'links')
      .pipe(
        delay(1000)
      );
  }

  addLinkApi(link: string): Observable<string> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient
      .post<string>(this.apiUrl + 'links', link, { headers })
      .pipe(
        map((response: string) => {
          return response;
        })
      );
  }
}
