import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product, CartItem } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  public cartItems$ = this.cartItems.asObservable();

  constructor() { }

  addToCart(product: Product): void {
    const currentItems = this.cartItems.getValue();
    const existingItem = currentItems.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
      this.cartItems.next([...currentItems]);
    } else {
      this.cartItems.next([...currentItems, { ...product, quantity: 1 }]);
    }
  }

  removeFromCart(productId: number): void {
    const currentItems = this.cartItems.getValue();
    this.cartItems.next(currentItems.filter(item => item.id !== productId));
  }

  updateQuantity(productId: number, quantity: number): void {
    const currentItems = this.cartItems.getValue();
    const item = currentItems.find(i => i.id === productId);
    if (item) {
      if (quantity > 0) {
        item.quantity = quantity;
        this.cartItems.next([...currentItems]);
      } else {
        this.removeFromCart(productId);
      }
    }
  }

  getCartTotal(items: CartItem[]): number {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getCartCount(items: CartItem[]): number {
    return items.reduce((count, item) => count + item.quantity, 0);
  }

  clearCart(): void {
    this.cartItems.next([]);
  }
}
