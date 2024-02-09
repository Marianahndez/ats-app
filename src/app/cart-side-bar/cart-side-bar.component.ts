import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Observable, Subject, first } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-side-bar',
  templateUrl: './cart-side-bar.component.html',
  styleUrl: './cart-side-bar.component.scss',
})
export class CartSideBarComponent {
  // leemos los datos del observable publico para renderearlos al ui
  moviesToCart$ = this.apiService.cart$;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCartData().subscribe((data) => {
      this.apiService.setCart(data);
    });
  }
}
