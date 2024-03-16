import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';

@Component({
  selector: 'app-donate-dialog',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  templateUrl: './donate-dialog.component.html',
  styleUrl: './donate-dialog.component.scss'
})
export class DonateDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DonateDialogComponent>,
  ) {}

}
