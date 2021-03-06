import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LinksComponent } from './links/links.component';

export const routes: Routes = [
  { path: '', component: LinksComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [LinksComponent],
})
export class LinksModule {

  constructor() {
    console.log("LinksModule constructed");
  }
}