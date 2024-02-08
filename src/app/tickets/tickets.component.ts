import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CartSideBarComponent } from '../cart-side-bar/cart-side-bar.component';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss',
  providers: [CartSideBarComponent],
})
export class TicketsComponent implements OnInit {
  movieList: any[] = [];
  moviesToCart: any[] = [];
  constructor(
    private apiService: ApiService,
    private cartComponent: CartSideBarComponent
  ) {}

  ngOnInit(): void {
    this.getFullData();
  }

  getFullData() {
    this.apiService.getMoviesData().subscribe((data) => {
      this.movieList = data;
    });
  }

  postMovies(item: any) {
    this.cartComponent.postCart(item);
  }
}
