import {  Routes } from "@angular/router";
const currencysRoutes:Routes = [
  {
    path:'list',
    loadComponent:()=>import('./currencys-list/currencys-list.component').then((c)=>c.CurrencysListComponent)
  },
  {
    path:'create',
    loadComponent:()=>import('./currencys-form/currencys-form.component').then((c)=>c.CurrencysFormComponent)
  },
  {
    path:'edit/:id',
    loadComponent:()=>import('./currencys-form/currencys-form.component').then((c)=>c.CurrencysFormComponent)
  }
];
export default currencysRoutes;