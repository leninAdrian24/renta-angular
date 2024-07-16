export interface Sidebar {
  routerLink?: string;
  icon?: string;
  label: string;
  dropdownKey?: string;
  role:string[];
  children?: Sidebar[];
}

