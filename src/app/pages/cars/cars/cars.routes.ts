import { Routes } from "@angular/router";

const carsRoutes: Routes = [
  {
    path:'list',
    loadComponent:()=>import('./cars-list/cars-list.component').then((c)=>c.CarsListComponent)
  },
  {
    path:'create',
    loadComponent:()=>import('./cars-form/cars-form.component').then((c)=>c.CarsFormComponent)
  },
  {
    path:'edit/:id',
    loadComponent:()=>import('./cars-form/cars-form.component').then((c)=>c.CarsFormComponent)
  },
  {
    path:'',
    redirectTo:'list',
    pathMatch:'full'
  }
]
export default carsRoutes;