import { Routes } from '@angular/router';
const clientsRoutes:Routes = [
  {
    path:'list',
    loadComponent:()=>import('./clients-list/clients-list.component').then((c)=>c.ClientsListComponent)
  },
  {
    path:'create',
    loadComponent:()=>import('./clients-form/clients-form.component').then((c)=>c.ClientsFormComponent)
  },
  {
    path:'edit/:id',
    loadComponent:()=>import('./clients-form/clients-form.component').then((c)=>c.ClientsFormComponent)
  },
  {
    path:'',
    redirectTo:'list',
    pathMatch:'full'
  }
]
export default clientsRoutes;