import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(private httpClient: HttpClient) { }

  getCourse(name: string): Observable<Course | undefined> {
    return this.httpClient.get<Course[]>('/assets/data/courses.json')
      .pipe(
        map((courses) => courses.find(i => i.name == name)),
        delay(1000)
      );
  }

  getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>('/assets/data/courses.json')
      .pipe(
        delay(1000)
      );
  }
}
