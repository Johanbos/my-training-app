import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    LoadingComponent,
    MenuComponent
  ],
  exports: [
    LoadingComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
