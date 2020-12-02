import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Course } from 'src/app/shared/model/course';
import { CoursesService } from 'src/app/shared/service/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  loading = true;
  courses$: Observable<Course[]> | undefined;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.courses$ = this.coursesService.getCourses().pipe(
      tap(() => this.loading = false)
    );
  }
}
