import { HostListener, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Competence } from '../shared/model/competence';
import { Training } from '../shared/model/training';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})

export class CompetencesComponent implements OnInit {
  @Input() list: Competence[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  celebrate(competence: Competence): void {
    alert(competence.name + " is awesome");
  }
}
