import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';

export const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: ':name', component: CourseComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class TrainingModule { }
