import { Routes } from "@angular/router";

const brandsRoutes:Routes= [
  {
    path:'list',
    loadComponent:()=>import('./brands-list/brands-list.component').then((c)=>c.BrandsListComponent)
  },
  {
    path:'create',
    loadComponent:()=>import('./brands-form/brands-form.component').then((c)=>c.BrandsFormComponent)
  },
  {
    path:'edit/:id',
    loadComponent:()=>import('./brands-form/brands-form.component').then((c)=>c.BrandsFormComponent)
  },
  {
    path:'',
    redirectTo:'list',
    pathMatch:'full'
  }
]
export default brandsRoutes