import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
	selector: 'quotes',
	template: '<h1> Quotes </h1>'
})
export class QuotesComponent implements OnInit {

	constructor(
		private router: Router) {

	}

	ngOnInit(): void {

	}

}