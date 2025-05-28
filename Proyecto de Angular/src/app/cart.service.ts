import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: string[] = [];

  addToCart(item: string) {
    this.cart.push(item);
  }

  getCartItems() {
    return this.cart;
  }
}
