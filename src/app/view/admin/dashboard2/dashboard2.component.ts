import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-dashboard2',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-menu-button slot="start"></ion-menu-button>
        <ion-title>Dashboard2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <h1>Welcome to the dashboard2 page!</h1>
    </ion-content>
  `,
  styles: [],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class Dashboard2Component {}
