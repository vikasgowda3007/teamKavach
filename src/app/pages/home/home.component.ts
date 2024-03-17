import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgImageSliderModule } from 'ng-image-slider';
import { HeaderComponent } from "../header/header.component";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [
        MatSlideToggleModule,
        MatSliderModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        NgImageSliderModule,
        HeaderComponent
    ]
})
export class HomeComponent {
  public imgCollection: Array<object> = [
    {
      image: 'assets/jpg/d0.jpg',
      thumbImage: 'assets/jpg/d0.jpg',
      alt: 'Image 0',
      title: 'Image 0'
    },
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
}
