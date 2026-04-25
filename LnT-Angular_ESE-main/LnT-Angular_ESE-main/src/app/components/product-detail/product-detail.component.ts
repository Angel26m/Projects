import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    if (productId) {
      this.productService.getProductById(productId).subscribe(products => {
        // Find the product since our mock service returns all of them
        this.product = products.find(p => p.id === productId);
      });
    }
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product);
    }
  }

  onImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = 'https://placehold.co/500x333/e0e0e0/808080?text=Image+Not+Found';
  }
}
