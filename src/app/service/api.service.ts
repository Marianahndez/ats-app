import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private ApiMoviesURL = 'http://localhost:3000/movies';
  private ApiCart = 'http://localhost:3000/cart';
  private ApiCandies = 'http://localhost:3000/candies';

  // privado
  private cart: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  // publico observable a leer en la app
  public cart$: Observable<any[]> = this.cart.asObservable();

  constructor(private http: HttpClient) {}

  public getMoviesData(): Observable<any> {
    return this.http.get(this.ApiMoviesURL);
  }

  public getCartData(): Observable<any> {
    return this.http.get(this.ApiCart);
  }

  public addItemsToCart(items: any): Observable<any> {
    return this.http.post(this.ApiCart, items);
  }

  public getCandiesData(): Observable<any> {
    return this.http.get(this.ApiCandies);
  }

  addMovie(item: any) {
    const currentMovies = this.cart.value;
    const newMovies = [...currentMovies, item];
    this.cart.next(newMovies);
  }

  setCart(movies: any) {
    this.cart.next(movies);
  }
}
