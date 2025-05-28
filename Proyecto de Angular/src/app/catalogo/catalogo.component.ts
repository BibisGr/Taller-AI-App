import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-catalogo',
  imports: [RouterLink],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  menu: any[] = [];

  constructor(private cartService: CartService, private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('/data/platos.json').subscribe((data: any[]) => {
      this.menu = data;
    });
  }

  addToCart(dish: string) {
    this.cartService.addToCart(dish);
  }
}
