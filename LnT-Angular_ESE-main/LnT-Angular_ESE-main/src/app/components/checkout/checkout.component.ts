import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { CartService } from '../../services/cart.service';
import { CheckoutDialogComponent } from '../checkout-dialog/checkout-dialog.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  checkoutForm: FormGroup;

  cartService = inject(CartService);
  private fb = inject(FormBuilder);
  private dialog = inject(MatDialog);

  constructor() {
    this.checkoutForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      zip: ['', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]] // basic US zip
    });
  }

  onSubmit(): void {
    if (this.checkoutForm.valid) {
      // Show success dialog
      const dialogRef = this.dialog.open(CheckoutDialogComponent, {
        width: '400px'
      });

      dialogRef.afterClosed().subscribe(() => {
        // Clear cart after successful checkout
        this.cartService.clearCart();
        this.checkoutForm.reset();
      });
    } else {
      // Mark all as touched to show validation errors
      this.checkoutForm.markAllAsTouched();
    }
  }
}
