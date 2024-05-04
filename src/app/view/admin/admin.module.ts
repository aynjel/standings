import { NgModule } from '@angular/core';
import { AdminMenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { adminRoutes } from './admin.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AdminMenuComponent],
  imports: [IonicModule, CommonModule, RouterModule.forChild(adminRoutes)],
})
export class AdminModule {}
