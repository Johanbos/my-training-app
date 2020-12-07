import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Competence } from 'src/app/shared/model/competence';
import { FavoritesService } from 'src/app/shared/service/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit, OnDestroy {
  competenceAddedSubscription: Subscription | undefined;
  competenceDeletedSubscription: Subscription | undefined;
  /** @deprecated needs to be a service/store **/
  competences: Competence[] = [];

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit(): void {
    this.competenceAddedSubscription = this.favoritesService.competenceAdded$.subscribe((competence) => this.competenceAdded(competence));
  }

  ngOnDestroy(): void {
    this.competenceAddedSubscription?.unsubscribe();
  }

  competenceAdded(competence: Competence): void {
    this.competences.push(competence);
  }

  get averageRate(): number {
    const rated = this.competences.filter(item => item.rate);
    const total = rated.reduce((acc, item) => acc + (item.rate || 0), 0);
    return total / rated.length;
  }
}