import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CarritoComponent } from './carrito/carrito.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'carrito', component: CarritoComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},

];
