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
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  private dListPics: string[] = ['assets/jpg/d1.jpg', 'assets/jpg/d2.jpg', 'assets/jpg/d3.jpg', 'assets/jpg/d4.jpg'];
  public dPic: string = '';
  // private timeLeft: number = 6000;
  private index: number = 0;

  ngOnInit(): void {
    this.dPic = this.dListPics[this.index];
}

  public openDonateDialog(): void {
    this.dialog.open(DonateDialogComponent);
  }

  public leftPic(): void {
    if (this.index === 0) {
        this.index = 3;
    } else {
        this.index--;
    }
    this.dPic = this.dListPics[this.index];
  }

  public rightPic(): void {
    if (this.index === 3) {
        this.index = 0;
    } else {
        this.index++;
    }
    this.dPic = this.dListPics[this.index];
  }

//   public openInstagramPage(): void {
//     window.
//   }
}
