import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Training } from '../model/training';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  constructor(private httpClient: HttpClient) { }

  getTraining(name: string): Observable<Training | undefined> {
    return this.httpClient.get<Training[]>('/assets/data/courses.json')
      .pipe(
        map((courses) => courses.find(i => i.name == name)),
        delay(1000)
      );
  }

  getCourses(): Observable<Training[]> {
    return this.httpClient.get<Training[]>('/assets/data/courses.json')
      .pipe(
        delay(1000)
      );
  }
}
