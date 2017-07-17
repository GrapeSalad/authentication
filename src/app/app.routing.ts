import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';


const appRoutes: Routes = [
  // {
  //   path: '',
  //   component: PrivateComponent
  // },
  {
    path: 'public',
    component: PublicComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
