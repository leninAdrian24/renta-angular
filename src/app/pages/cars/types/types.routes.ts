import { Routes } from "@angular/router";

const typesRoutes:Routes = [
  {
    path:'list',
    loadComponent:()=>import('./types-list/types-list.component').then((c)=>c.TypesListComponent)
  },
  {
    path:'create',
    loadComponent:()=>import('./types-form/types-form.component').then((c)=>c.TypesFormComponent)
  },
  {
    path:'edit/:id',
    loadComponent:()=>import('./types-form/types-form.component').then((c)=>c.TypesFormComponent)
  },
  {
    path:'',
    redirectTo:'list',
    pathMatch:'full'
  }
]
export default typesRoutes;