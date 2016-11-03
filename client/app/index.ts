import { NgModule } from '@angular/core';
// import { NgSemanticModule } from 'ng-semantic';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

// import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material";

import {routing, RootComponent} from './app.routing';

// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import {TechsModule} from './techs';

import {MainComponent} from './main.component';
import {HeaderComponent} from './header';
import {TitleComponent} from './title';
import {FooterComponent} from './footer';

import {MoviesComponent} from './movies.component';
import {MovieDetailComponent} from './movie-detail.component';
import {QuotesComponent} from './quotes.component';
import {MovieService} from './movie.service';
// import 'hammerjs';

import './rxjs-extensions';

@NgModule({
  imports: [
    BrowserModule,
    // NgSemanticModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing,
    TechsModule
  ],
  declarations: [
    RootComponent,
    MainComponent,
    HeaderComponent,
    TitleComponent,
    FooterComponent,
    MoviesComponent,
    MovieDetailComponent,
    QuotesComponent
  ],
  providers: [
    MovieService
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
