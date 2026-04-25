import { Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './checkout-dialog.component.html',
  styleUrl: './checkout-dialog.component.scss'
})
export class CheckoutDialogComponent {
  private dialogRef = inject(MatDialogRef<CheckoutDialogComponent>);
  private router = inject(Router);

  closeDialog(): void {
    this.dialogRef.close();
    this.router.navigate(['/products']);
  }
}
