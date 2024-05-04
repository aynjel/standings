import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <h1>Welcome to the home page!</h1>
    </ion-content>
  `,
  styles: [],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomeComponent {}
