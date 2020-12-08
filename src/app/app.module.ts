import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './core/home/home.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { NeverActivateGuard } from './never-activate.guard';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { favoritesReducer } from './shared/stores/favorites/favorites.reducer';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ favorites: favoritesReducer })
  ],
  providers: [NeverActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
