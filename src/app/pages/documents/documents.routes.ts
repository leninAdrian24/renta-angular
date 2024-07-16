import { Routes } from "@angular/router";

const documentsRoutes:Routes = [
  {
    path:'list',
    loadComponent:()=>import('./documents-list/documents-list.component').then((c)=>c.DocumentsListComponent)
  },
  {
    path:'create',
    loadComponent:()=>import('./documents-form/documents-form.component').then((c)=>c.DocumentsFormComponent)
  },
  {
    path:'edit/:id',
    loadComponent:()=>import('./documents-form/documents-form.component').then((c)=>c.DocumentsFormComponent)
  },
  {
    path:'',
    redirectTo:'list',
    pathMatch:'full'
  }
]
export default documentsRoutes;