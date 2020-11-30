import { Component, OnInit } from '@angular/core';
import { Training } from '../shared/model/training';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  training: Training = { name: '', competences: []};
  constructor() { }

  ngOnInit(): void {
    this.training.name = 'Angular Basics';
    this.training.competences.push( { name: 'App setup / configs / index / module / component' });
    this.training.competences.push( { name: 'Cli' });
    this.training.competences.push( { name: 'Lifecycle' });
    this.training.competences.push( { name: 'Data binding' });
    this.training.competences.push( { name: 'Class / Interface' });
  }

}
