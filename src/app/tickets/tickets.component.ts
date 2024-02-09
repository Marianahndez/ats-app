import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss',
})
export class TicketsComponent implements OnInit {
  // esto esta leyendo la lista de pelis directo de la api
  movieList$ = this.apiService.getMoviesData();
  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
  }

  postMovies(item: any) {
    this.apiService
      .addItemsToCart(item)
      .pipe(first())
      .subscribe((data) => {
        this.apiService.addMovie(data);
      });
  }

  // unsubscribe de los servicios: pipe "take until"
}
