import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketsComponent } from './tickets/tickets.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CartSideBarComponent } from './cart-side-bar/cart-side-bar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CandyShopComponent } from './candy-shop/candy-shop.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketsComponent,
    HomePageComponent,
    CartSideBarComponent,
    CandyShopComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [provideClientHydration(), HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
