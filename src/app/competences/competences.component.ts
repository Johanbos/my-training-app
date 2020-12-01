import { EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Competence } from '../shared/model/competence';
import { BackgroundColorService } from '../shared/service/background-color.service';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})

export class CompetencesComponent implements OnInit {
  @Input() list: Competence[] = [];


  constructor(public backgroundColorService: BackgroundColorService) { }

  ngOnInit(): void {
  }

  celebrate(competence: Competence): void {
    alert(`${competence.name} is awesome`);
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
}
