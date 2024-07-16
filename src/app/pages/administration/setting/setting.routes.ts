import { Routes } from "@angular/router";

const settingRoutes:Routes = [
  {
    path:'edit',
    loadComponent:()=>import('./setting-form/setting-form.component').then((c)=>c.SettingFormComponent)
  }
];
export default settingRoutes