import { Component, OnInit } from '@angular/core';
import { Training } from '../model/training';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})

export class CompetencesComponent implements OnInit {
  training = new Training();
  constructor() { }

  ngOnInit(): void {
    this.training.name = 'Angular Basics';
    this.training.competences = [
      'App setup / configs / index / module / component',
      'Cli',
      'Lifecycle',
      'Data binding'];
  }
}
