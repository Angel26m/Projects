import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {
  cartService = inject(CartService);
  displayedColumns: string[] = ['image', 'name', 'price', 'quantity', 'total', 'actions'];

  updateQuantity(productId: number, currentQuantity: number, change: number): void {
    const newQuantity = currentQuantity + change;
    this.cartService.updateQuantity(productId, newQuantity);
  }

  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
  }
}
