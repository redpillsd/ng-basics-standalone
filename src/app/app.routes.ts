import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  { path: 'admin',
    loadChildren: () => import('./admin/admin.routes').then(m => m.AdminRoutes),
    providers: [importProvidersFrom(HttpClientModule)]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'admin'
  },
  {
    path: '**',
    redirectTo: 'admin'
  }
];
