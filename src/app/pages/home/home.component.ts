import { Component, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialog} from '@angular/material/dialog'
import { DonateDialogComponent } from '../donate-dialog/donate-dialog.component';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgImageSliderModule } from 'ng-image-slider';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    MatSliderModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    NgImageSliderModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(public dialog: MatDialog) {}

  public imgCollection: Array<object> = [
    {
      image: 'assets/jpg/d1.jpg',
      thumbImage: 'assets/jpg/d1.jpg',
      alt: 'Image 1',
      title: 'Image 1'
    },
    {
      image: 'assets/jpg/d2.jpg',
      thumbImage: 'assets/jpg/d2.jpg',
      alt: 'Image 2',
      title: 'Image 2'
    },
    {
      image: 'assets/jpg/d3.jpg',
      thumbImage: 'assets/jpg/d3.jpg',
      alt: 'Image 3',
      title: 'Image 3'
    },
    {
      image: 'assets/jpg/d4.jpg',
      thumbImage: 'assets/jpg/d4.jpg',
      alt: 'Image 4',
      title: 'Image 5'
    },
];

  public openDonateDialog(): void {
    this.dialog.open(DonateDialogComponent);
  }
}
