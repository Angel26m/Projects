import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';
import { FilterPipe } from '../../pipes/filter.pipe';
import { Pipe, PipeTransform } from '@angular/core';

// Inline category filter pipe
@Pipe({ name: 'categoryFilter', standalone: true })
export class CategoryFilterPipe implements PipeTransform {
  transform(products: Product[], category: string): Product[] {
    if (!products) return [];
    if (!category || category === 'All') return products;
    return products.filter(p => p.category === category);
  }
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    RouterModule,
    FilterPipe,
    CategoryFilterPipe
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  searchTerm: string = '';
  selectedCategory: string = 'All';
  categories: string[] = [];

  private productService = inject(ProductService);
  private cartService = inject(CartService);

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      const cats = [...new Set(data.map(p => p.category))];
      this.categories = ['All', ...cats.sort()];
    });
  }

  selectCategory(cat: string): void {
    this.selectedCategory = cat;
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  onImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = 'https://placehold.co/500x333/e0e0e0/808080?text=Image+Not+Found';
  }
}
