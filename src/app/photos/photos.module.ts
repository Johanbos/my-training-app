import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PhotosComponent } from './photos/photos.component';

export const routes: Routes = [
  { path: '', component: PhotosComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class PhotosModule {

  constructor() {
    console.log("PhotosModule constructed");
  }
}