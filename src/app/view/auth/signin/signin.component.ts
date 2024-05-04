import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Signin</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <form>
        <ion-item>
          <ion-label>Email</ion-label>
          <ion-input type="email" name="email" ngModel required></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Password</ion-label>
          <ion-input
            type="password"
            name="password"
            ngModel
            required
          ></ion-input>
        </ion-item>
        <ion-button type="submit">Signin</ion-button>
      </form>
    </ion-content>
  `,
  styles: [],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class SigninComponent {}
