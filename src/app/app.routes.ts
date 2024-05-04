import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./view/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'auth',
    children: [
      {
        path: 'sign-in',
        loadComponent: () =>
          import('./view/auth/signin/signin.component').then(
            (m) => m.SigninComponent
          ),
      },
      {
        path: 'sign-up',
        loadComponent: () =>
          import('./view/auth/signup/signup.component').then(
            (m) => m.SignupComponent
          ),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'sign-in',
      },
    ],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./view/admin/admin.module').then((m) => m.AdminModule),
  },
];
