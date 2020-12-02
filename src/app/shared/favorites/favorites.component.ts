import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Competence } from '../model/competence';
import { FavoritesService } from '../service/favorites.service';

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
    this.competenceDeletedSubscription = this.favoritesService.competenceDeleted$.subscribe((competence) => this.competenceDeleted(competence));
  }

  ngOnDestroy(): void {
    this.competenceAddedSubscription?.unsubscribe();
    this.competenceDeletedSubscription?.unsubscribe();
  }

  competenceAdded(competence: Competence): void {
    this.competences.push(competence);
  }

  competenceDeleted(competence: Competence): void {
    this.competences = this.competences.filter(item => item.name != competence.name);
  }

  get averageRate(): number {
    const rated = this.competences.filter(item => item.rate);
    const total = rated.reduce((acc, item) => acc + (item.rate || 0), 0);
    return total / rated.length;
  }
}
