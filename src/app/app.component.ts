import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [MatSlideToggleModule, HomeComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
  public title = 'Team Kavach';
}
