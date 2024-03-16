import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    RouterOutlet,
    AppComponent,
    PagesModule,
    MatSlideToggleModule
  ]
})
export class AppModule { }
