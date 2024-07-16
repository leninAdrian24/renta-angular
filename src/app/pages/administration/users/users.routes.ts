import { Routes } from "@angular/router";

const usersRoutes:Routes = [
  {
    path:'list',
    loadComponent:()=>import('./users-list/users-list.component').then((c)=>c.UsersListComponent)
  },
  {
    path:'profile',
    loadComponent:()=>import('./users-list/users-list.component').then((c)=>c.UsersListComponent)
  },
  {
    path:'create',
    loadComponent:()=>import('./users-form/users-form.component').then((c)=>c.UsersFormComponent)
  },
  {
    path:'edit/:id',
    loadComponent:()=>import('./users-form/users-form.component').then((c)=>c.UsersFormComponent)
  },
  {
    path:'',
    redirectTo:'list',
    pathMatch:'full'
  }
]
export default usersRoutes;