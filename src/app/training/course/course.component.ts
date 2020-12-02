import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, forkJoin, Observable } from 'rxjs';
import { combineAll, map, switchMap, tap } from 'rxjs/operators';
import { Course } from 'src/app/shared/model/course';
import { CoursesService } from 'src/app/shared/service/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  loading = true;
  course$: Observable<Course | undefined> | undefined;
  constructor(
    private coursesService: CoursesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.course$ = combineLatest([this.activatedRoute.params, this.activatedRoute.queryParams])
      .pipe(
        map(([params, queryParams]) => [params.name, queryParams.delay]),
        switchMap(([name, delay]) => this.coursesService.getCourse(name, delay)),
        tap(() => this.loading = false)
      );
  }
}
