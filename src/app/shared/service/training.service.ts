import { Injectable } from '@angular/core';
import { Training } from '../model/training';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  constructor() { }

  getTraining(): Training {
    const training: Training = { name: 'Angular Fundamentals', competences: []};
    training.competences.push( { name: 'App setup / configs / index / module / component', completed: new Date(2020, 11, 30, 10, 0) });
    training.competences.push( { name: 'Cli', completed: new Date(2020, 11, 30, 10, 0) });
    training.competences.push( { name: 'Lifecycle', completed: new Date(2020, 11, 30, 10, 0) });
    training.competences.push( { name: 'Class / Interface', completed: new Date(2020, 11, 30, 10, 0) });
    training.competences.push( { name: 'Events dom & host', completed: new Date(2020, 11, 30, 10, 0) });
    training.competences.push( { name: 'Data binding', completed: new Date(2020, 12, 1, 10, 0) });
    training.competences.push( { name: 'Services' });
    return training;
  }
}
