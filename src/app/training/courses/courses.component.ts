import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Training } from 'src/app/shared/model/training';
import { TrainingService } from 'src/app/shared/service/training.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  loading = true;
  courses$: Observable<Training[]> | undefined;

  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.courses$ = this.trainingService.getCourses().pipe(
      tap(() => this.loading = false)
    );
  }
}
