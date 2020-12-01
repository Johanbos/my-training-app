import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Training } from '../model/training';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  constructor(private httpClient: HttpClient) { }

  getTraining(): Observable<Training> {
    return this.httpClient.get<Training>('/assets/data/training.json')
      .pipe(
        delay(1000)
      );
  }
}
