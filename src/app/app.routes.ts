import { Routes } from '@angular/router';
import { AdminLayoutComponent } from '@snovasys/timechamp-demo-header-and-sidenav';

export const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
];
