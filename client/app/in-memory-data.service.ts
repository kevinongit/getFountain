import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		let movies = [
			  { rank: 1, movieName: 'Mr. Nice', totalAudience: 1000 },
		  	  { rank: 2, movieName: 'Gowin', totalAudience: 1000 },
		 	  { rank: 3, movieName: 'total', totalAudience: 1000 },
			  { rank: 4, movieName: 'Humble', totalAudience: 1000 },
			  { rank: 5, movieName: 'Gear', totalAudience: 1000 },
			  { rank: 6, movieName: 'Seven', totalAudience: 1000 },
			  { rank: 7, movieName: 'The sea', totalAudience: 1000 },
			  { rank: 8, movieName: 'Misery', totalAudience: 1000 },
			  { rank: 9, movieName: 'Back to', totalAudience: 1000 },
			  { rank: 10, movieName: 'Calcualtion', totalAudience: 1000 }
		];

		return {movies};
	}
}