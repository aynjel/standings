import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AdminMenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-dashboard',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-menu-button slot="start"></ion-menu-button>
        <ion-title>Dashboard</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <h1>Welcome to the dashboard page!</h1>
    </ion-content>
  `,
  styles: [],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class DashboardComponent {}
