import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Training } from 'src/app/shared/model/training';
import { TrainingService } from 'src/app/shared/service/training.service';

@Component({
  selector: 'app-course',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  loading = true;
  course$: Observable<Training | undefined> | undefined;
  constructor(
    private trainingService: TrainingService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.course$ = this.activatedRoute.params
      .pipe(
        map(params => params.name),
        switchMap((name) => this.trainingService.getTraining(name)),
        tap(() => this.loading = false)
      );
  }
}
