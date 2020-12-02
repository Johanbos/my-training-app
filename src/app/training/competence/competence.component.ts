import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Competence } from 'src/app/shared/model/competence';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css']
})
export class CompetenceComponent implements OnInit {
  @Input() competence: Competence | undefined;
  @Output() onDelete = new EventEmitter<Competence>();
  constructor() { }

  ngOnInit(): void {
  }

  doDelete() {
    if (this.competence) {
      this.onDelete.emit(this.competence);
    }
  }
}
