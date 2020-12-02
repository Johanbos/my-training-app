import { EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Competence } from 'src/app/shared/model/competence';
import { BackgroundColorService } from 'src/app/shared/service/background-color.service';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})

export class CompetencesComponent implements OnInit {
  @Input() list: Competence[] = [];
  currentCompetence: Competence | undefined;

  constructor(public backgroundColorService: BackgroundColorService) { }

  ngOnInit(): void {
  }

  delete(competence: Competence): void {
    this.list = this.list.filter(item => item.name != competence.name);
  }

  onAdd(input: HTMLInputElement) {
    if (input.value != '') {
      this.list.push({ name: input.value });
      input.value = '';
    }
  }

  onColor(input: HTMLInputElement) {
    console.log(`Color: ${input.value}`);
    if (input.value != '') {
      this.backgroundColorService.value$.next(input.value);
      input.value = '';
    }
  }
}
