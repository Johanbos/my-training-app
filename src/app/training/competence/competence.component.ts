import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Competence } from 'src/app/shared/model/competence';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css']
})
export class CompetenceComponent implements OnInit, OnChanges {
  @Input() competence?: Competence;
  @Output() delete = new EventEmitter<Competence>();
  @Output() sumbit = new EventEmitter<Competence>();
  @Output() favorite = new EventEmitter<Competence>();
  @Output() unfavorite = new EventEmitter<Competence>();
  formGroup!: FormGroup;

  constructor(
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
}
