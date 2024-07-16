import { Component, Input,} from '@angular/core';
import { MaterialModule } from '../../../core/material/material.module';
import { RouterModule } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';
import { Sidebar } from '../../utils/sidebar/interfaces/sidebar';
import { MenuItems } from '../../utils/sidebar/menu-items';
import { GraphqlService } from '../../../core/services/graphql/graphql.service';
import { BrowserService } from '../../../core/services/browser/browser.service';
// import { menuItems } from '../../utils/shareds/sidebar';
// import { menuItemsInterface } from '../../utils/interfaces/sidebar.interface';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MaterialModule,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent{
  @Input() drawer!: MatDrawer;
  dropdownStates: any = {};
  menuItems: Sidebar[] = [];
  username:string = 'username';
  constructor(Items: MenuItems, grapqhl:GraphqlService) {
    Items.getMenuItems().subscribe(items => {
      this.menuItems = items;
    })
    grapqhl.getUsername().subscribe(username => {
      this.username = username; // Use the username in your app here.
    })
  }
  toggleDropdown(key: any): void {
    this.dropdownStates[key] = !this.dropdownStates[key];
  }
  toggleDrawer() {
    this.drawer.toggle();
  }
}
