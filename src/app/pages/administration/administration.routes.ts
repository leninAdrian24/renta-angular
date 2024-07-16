import { Routes } from "@angular/router";
const administrationRoutes:Routes = [
  {
    path:'users',
    loadChildren:()=>import('./users/users.routes')
  },
  {
    path:'currencys',
    loadChildren:()=>import('./currencys/currencys.routes')
  },
  {
    path:'settings',
    loadChildren:()=>import('./setting/setting.routes')
  },
  {
    path:'',
    redirectTo:'users',
    pathMatch:'full'
  }
]
export default administrationRoutes;