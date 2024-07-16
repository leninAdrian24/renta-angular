import { Injectable } from "@angular/core";
import { Sidebar } from "./interfaces/sidebar";
import { GraphqlService } from "../../../core/services/graphql/graphql.service";
import { map } from "rxjs";
import { BrowserService } from "../../../core/services/browser/browser.service";
@Injectable({
  providedIn: 'root'
})
export class MenuItems {
  
  constructor( private service: GraphqlService){
  }
  private menuitems: Sidebar[] = [
    {
      routerLink: "/dashboard",
      icon: "dashboard",
      label: "Dashboard",
      role: ['admin','client'],
    },
    {
      icon:'settings',
      label: "Administration",
      dropdownKey: "administration",
      role: ['admin','client'],
      children: [
        {
          routerLink: "/administration/users/list",
          label: "Users",
          dropdownKey: 'administration',
          role: ['admin','client'],
        },
        {
          routerLink: "/administration/currencys/list",
          label: "Currencys",
          dropdownKey: 'administration',
          role: ['admin','client'],
        },
        {
          routerLink: "/administration/settings/edit",
          label: "Settings",
          dropdownKey: 'administration',
          role: ['admin','client'],
        },
      ]
    },
    {
      routerLink: "/clients/list",
      icon: "people",
      label: "Clients",
      role: ['admin','client'],
    },
    {
      routerLink: "/documents/list",
      icon: "description",
      label: "Documents",
      role: ['admin','client'],
    },
    {
      label: "Cars",
      icon: "local_shipping",
      dropdownKey: "cars",
      role: ['admin','client'],
      children:[
        {
          routerLink: "/cars/brands/list",
          label: "Brands",
          dropdownKey: 'cars',
          role: ['admin','client'],
        },
        {
          routerLink: "/cars/list",
          label: "Cars",
          dropdownKey: 'cars',
          role: ['admin','client'],
        },
        {
          routerLink: "/cars/rentals/",
          label: "Rentals",
          dropdownKey: 'cars',
          role: ['admin','client'],
        },
        {
          routerLink: "/cars/types",
          label: "Types",
          dropdownKey: 'cars',
          role: ['admin','client'],
        },
      ]
    }
  ];
  getMenuItems(){
    return this.service.getRole().pipe(
      map(role =>{
        const items = this.filterMenuItemsByRole(this.menuitems, role);
        return items;
      })
    )
  }
  filterMenuItemsByRole(menuItems: Sidebar[], allowedRole: string): Sidebar[] {
    const role: any = allowedRole ; // Asegurarse de que el role permitido sea del tipo Role
    return menuItems.reduce<Sidebar[]>((filteredItems, menuItem) => {
      if (menuItem.role.includes(role)) {
        const filteredItem = { ...menuItem };
        if (filteredItem.children) {
          filteredItem.children = this.filterMenuItemsByRole(filteredItem.children, allowedRole);
          if (filteredItem.children.length > 0) {
            filteredItems.push(filteredItem);
          }
        } else {
          filteredItems.push(filteredItem);
        }
      }
      return filteredItems;
    }, []);
  }
}
