import { Routes } from '@angular/router';
const routes:Routes=[
  {
    path:'profile',
    loadComponent:()=>import('./profile/profile.component').then((c)=>c.ProfileComponent)
  },
  {
    path:'',
    redirectTo:'profile',
    pathMatch:'full'
  }
]
export default routes;