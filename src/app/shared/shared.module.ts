import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    LoadingComponent,
    MenuComponent
  ],
  exports: [
    LoadingComponent,
    MenuComponent
  ]
})
export class SharedModule { }
