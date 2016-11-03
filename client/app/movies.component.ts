import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SEMANTIC_COMPONENTS } from 'ng-semantic';

import { Movie } from './movie';
import { MovieDetailComponent } from './movie-detail.component';
import { MovieService } from './movie.service';

@Component({
	// moduleId: module.id,
    selector: 'my-movies',
    template: require('./movies.component.html'),
  	// styleUrls: [ require('./movies.component.css').toString() 
})
export class MoviesComponent implements OnInit {
	movies : any[];
	selectedMovie:Movie;

	constructor(
		private router: Router,
		private movieService : MovieService) {

	}

	ngOnInit(): void {
		this.getMovies();
	}

	getMovies(): void {
		// this.movieService.getMovies().then(movies => this.movies = movies);
		// this.movies = this.movieService.getMovies();
		this.movieService.getMovies().subscribe(boxInfo => {
				 	console.log('in subscribe');
				 	this.movies = boxInfo.movies;
				 	console.log('movies.length = ' + this.movies.length);
				 });
		console.log('in getMovies()');
	}

	onSelect(movie: Movie):void {
		this.selectedMovie = movie;
	}

	gotoDetail(): void {
		this.router.navigate(['/detail', this.selectedMovie.movieName]);
	}
}