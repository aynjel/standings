import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <ion-menu side="start" contentId="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-list>
          <ion-item routerLink="/home">Home</ion-item>
          <ion-item routerLink="/auth/sign-in">Sign In</ion-item>
          <ion-item routerLink="/auth/sign-up">Sign Up</ion-item>
          <ion-item routerLink="/admin/dashboard">Dashboard</ion-item>
          <ion-item routerLink="/admin/dashboard2">Dashboard2</ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>
    <ion-router-outlet id="main-content"></ion-router-outlet>
  `,
  styles: [],
})
export class AdminMenuComponent {}
