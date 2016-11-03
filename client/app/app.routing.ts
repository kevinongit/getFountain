/// <reference path="../../typings/index.d.ts"/>

import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { MoviesComponent }      from './movies.component';
import { MovieDetailComponent } from './movie-detail.component';
import { QuotesComponent } from './quotes.component';

@Component({
  selector: 'fountain-root',
  template: '<router-outlet></router-outlet>'
})
export class RootComponent {}

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
  	path: 'quotes',
  	component: QuotesComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
  	path: 'detail/:movieName',
  	component: MovieDetailComponent
  }
];

export const routing = RouterModule.forRoot(routes);
