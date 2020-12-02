import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
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
    this.course$ = this.activatedRoute.params
      .pipe(
        map(params => params.name),
        switchMap((name) => this.coursesService.getCourse(name)),
        tap(() => this.loading = false)
      );
  }
}
