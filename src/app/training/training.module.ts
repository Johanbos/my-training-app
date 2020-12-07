import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CompetenceComponent } from './competence/competence.component';
import { CompetencesComponent } from './competences/competences.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';

export const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: ':name', component: CourseComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    CoursesComponent,
    CourseComponent,
    CompetencesComponent,
    CompetenceComponent
  ]
})
export class TrainingModule { }
