import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Competence } from 'src/app/shared/model/competence';
import { FavoritesService } from 'src/app/shared/service/favorites.service';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css']
})
export class CompetenceComponent implements OnInit {
  @Input() competence: Competence | undefined;
  @Output() deleteCompetence = new EventEmitter<Competence>();
  constructor(private favoritesService: FavoritesService) { }

  ngOnInit(): void {
  }

  deleteCompetenceClick() {
    if (this.competence) {
      this.deleteCompetence.emit(this.competence);
    }
  }

  favoriteCompetenceClick() {
    if (this.competence) {
      this.favoritesService.competenceAdded$.next(this.competence);
    }
  }

  unFavoriteCompetenceClick() {
    if (this.competence) {
      this.favoritesService.competenceDeleted$.next(this.competence);
    }
  }
}
