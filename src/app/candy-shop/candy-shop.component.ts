import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CartSideBarComponent } from '../cart-side-bar/cart-side-bar.component';

@Component({
  selector: 'app-candy-shop',
  templateUrl: './candy-shop.component.html',
  styleUrl: './candy-shop.component.scss',
  providers: [CartSideBarComponent],
})
export class CandyShopComponent implements OnInit {
  candiesList: any[] = [];
  candiesToCart: any[] = [];
  constructor(
    private apiService: ApiService,
    private cartComponent: CartSideBarComponent
  ) {}

  ngOnInit(): void {
    this.getFullData();
  }

  getFullData() {
    this.apiService.getCandiesData().subscribe((data) => {
      this.candiesList = data;
      console.log('candies: ', this.candiesList);
    });
  }

  // postCandies(item: any) {
  //   this.cartComponent.postCart(item);
  // }
}
