import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TicketsComponent } from './tickets/tickets.component';
import { CandyShopComponent } from './candy-shop/candy-shop.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Inicio',
  },
  {
    path: 'boletos',
    component: TicketsComponent,
    title: 'Boletos',
  },
  {
    path: 'dulceria',
    component: CandyShopComponent,
    title: 'Dulcería',
  },
  {
    path: 'contacto',
    component: ContactComponent,
    title: 'Contacto',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
