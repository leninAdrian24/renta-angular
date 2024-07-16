import { Routes } from '@angular/router';
import { autheticatedGuard } from './core/guards/autheticated.guard';
import { roleGuard } from './core/guards/role.guard';

export const routes: Routes = [
  {
    path:'auth',
    loadChildren:()=>import('./pages/auth/auth.routes')
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path:'',
    loadComponent:()=>import('./shared/components/nav/nav.component').then((c)=>c.NavComponent),
    children:[
      {
        path:'dashboard',
        loadComponent:()=>import('./pages/home/home.component').then((c)=>c.HomeComponent),
        // canActivate:[autheticatedGuard],
      },
      {
        path:'administration',
        loadChildren:()=>import('./pages/administration/administration.routes'),
        // canActivate:[autheticatedGuard,roleGuard],
        // data:{
        //   roles:['administrator','client']
        // }
      },
      {
        path: 'clients',
        loadChildren:()=>import('./pages/clients/clients.routes')
      },
      {
        path:'documents',
        loadChildren:()=>import('./pages/documents/documents.routes')
      },
      {
        path:'cars',
        loadChildren:()=>import('./pages/cars/cars.routes')
      },
      {
        path:'users',
        loadChildren:()=>import('./pages/users/user.routes')
      },
      {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
      }
    ]
  },
  
  {
    path:'**',
    loadComponent: () =>import('./pages/not-found/not-found.component').then((c) =>c.NotFoundComponent)
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full' // Esto asegura que cualquier ruta no especificada redirige a 'auth'
  }
];
