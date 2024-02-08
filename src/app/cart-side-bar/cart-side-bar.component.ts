import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  NgZone,
  OnInit,
} from '@angular/core';
import { ApiService } from '../service/api.service';
import { Observable, Subject, first } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-side-bar',
  templateUrl: './cart-side-bar.component.html',
  styleUrl: './cart-side-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartSideBarComponent implements OnInit {
  // public cartList: Subject<any[]> = new Subject<any[]>();
  // cartData$!: Observable<any>;
  cartList: any[] = [];
  constructor(
    private apiService: ApiService,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCart();
    // this.cartData$ = this.apiService.getCartData();
    console.log('data oninit: ', this.cartList);
  }

  getCart() {
    // this.apiService.getCartData().subscribe({
    //   next: (listData) => {
    //     this.cartList.next(listData);
    //   },
    // });

    this.apiService.getCartData().subscribe((data) => {
      this.cartList = data;
      // this.ngZone.run(() => {
      //   this.cartList = data;
      //   console.log('cart: ', this.cartList);
      //   this.cdr.detectChanges();
      // });
    });
  }

  postCart(item: any) {
    this.apiService
      .addItemsToCart(item)
      .pipe(first())
      .subscribe({
        next: (listData) => {
          // this.router.navigate(['*']);
          // this.cartList.next(listData);
          this.getCart();
          console.log('data: ', this.cartList);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
