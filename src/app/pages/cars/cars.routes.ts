import { Routes } from "@angular/router";

const carsRoutes:Routes = [
          
  {
    path:'brands',
    loadChildren: ()=>import('./brands/brands.routes')
  },
  {
    path:'types',
    loadChildren: ()=>import('./types/types.routes')
  },
  {
    path:'',
    loadChildren: ()=>import('./cars/cars.routes')
  },
  {
    path:'rentals',
    children:[
      {
        path:'list',
        loadComponent:()=>import('./rentals/rentals-list/rentals-list.component').then((c)=>c.RentalsListComponent)
      },
      {
        path:'create',
        loadComponent:()=>import('./rentals/rentals-form/rentals-form.component').then((c)=>c.RentalsFormComponent)
      },
      {
        path:'edit/:id',
        loadComponent:()=>import('./rentals/rentals-form/rentals-form.component').then((c)=>c.RentalsFormComponent)
      },
      {
        path:'',
        redirectTo:'list',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'',
    redirectTo:'list',
    pathMatch:'full'
  }
]
export default carsRoutes;