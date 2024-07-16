import { Routes } from "@angular/router";
import { autheticatedGuard } from "../../core/guards/autheticated.guard";
const authRoutes:Routes =[
  { path:'login', 
    loadComponent: ()=>import('./login/login.component').then((c)=>c.LoginComponent),
  },
  {
    path:'register',
    loadComponent: ()=>import('./register/register.component').then((c)=>c.RegisterComponent)
  },
  {
    path:'**',
    redirectTo:'login',
    pathMatch:'full'
  }
];
export default authRoutes;