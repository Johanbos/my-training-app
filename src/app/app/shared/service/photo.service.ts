import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private httpClient: HttpClient) { }

  getPhotos(): Observable<any[]> {
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/photos')
      .pipe(
        map((data) => data.slice(1, 30)),
        map((data) => data.map(img => {
          return { ...img, thumbnailUrl: "https://picsum.photos/200?random=" + img.id };
        })),
        delay(1000),
      );
  }
}
