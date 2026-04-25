import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';

export const routes: Routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'products', component: ProductListComponent },
    {
        path: 'product/:id',
        loadComponent: () => import('./components/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
    },
    {
        path: 'cart',
        loadComponent: () => import('./components/shopping-cart/shopping-cart.component').then(m => m.ShoppingCartComponent)
    },
    {
        path: 'checkout',
        loadComponent: () => import('./components/checkout/checkout.component').then(m => m.CheckoutComponent)
    }
];
