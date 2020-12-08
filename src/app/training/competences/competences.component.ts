import { Component, Input, OnInit } from '@angular/core';
import { Competence } from 'src/app/shared/model/competence';
import { BackgroundColorService } from 'src/app/shared/service/background-color.service';
import { FavoritesService } from 'src/app/shared/service/favorites.service';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})

export class CompetencesComponent implements OnInit {
  @Input() list: Competence[] = [];
  currentCompetence: Competence | undefined;

  constructor(
    public backgroundColorService: BackgroundColorService,
    private favoritesService: FavoritesService
  ) { }

  ngOnInit(): void {
  }

  deleteCompetence(competence: Competence): void {
    this.list = this.list.filter(item => item.name != competence.name);
  }

  addCompetence(input: HTMLInputElement) {
    if (input.value != '') {
      this.list.push({ name: input.value });
      input.value = '';
    }
  }

  saveCompetence(competence: Competence) {
    // oops, we don't have id's :D just add it
    this.list.push(competence);
  }

  favoriteCompetence(competence: Competence) {
    this.favoritesService.add(competence);
  }

  unfavoriteCompetence(competence: Competence) {
    this.favoritesService.remove(competence);
  }

  changeBackgroundColor(input: HTMLInputElement) {
    if (input.value != '') {
      this.backgroundColorService.value$.next(input.value);
      input.value = '';
    }
  }
}
