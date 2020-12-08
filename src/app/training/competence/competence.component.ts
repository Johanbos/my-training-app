import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Competence } from 'src/app/shared/model/competence';
import { FavoritesService } from 'src/app/shared/service/favorites.service';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css']
})
export class CompetenceComponent implements OnInit, OnChanges {
  @Input() competence?: Competence;
  @Output() deleteCompetence = new EventEmitter<Competence>();
  @Output() saveCompetence = new EventEmitter<Competence>();
  formGroup!: FormGroup;

  constructor(
    private favoritesService: FavoritesService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: '',
      completed: '',
      rate: ''
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.competence && this.competence) {
      this.formGroup.setValue(this.competence);
    }
  }

  submit() {
    if (this.formGroup.pristine) {
      return;
    }

    if (this.formGroup.valid) {
      this.saveCompetence.emit(this.formGroup.value);
    }
  }

  deleteCompetenceClick() {
    if (this.competence) {
      this.deleteCompetence.emit(this.competence);
    }
  }

  favoriteCompetenceClick() {
    if (this.competence) {
      this.favoritesService.add(this.competence);
    }
  }
}
