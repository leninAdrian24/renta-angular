import { Component, ViewChild, inject } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MaterialModule } from '../../../core/material/material.module';
import { Router, RouterModule } from '@angular/router';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { BrowserService } from '../../../core/services/browser/browser.service';
import { TransformDataTablePipe } from "../../../core/pipes/transform-data-table.pipe";
import { GraphqlService } from '../../../core/services/graphql/graphql.service';
import { ApiService } from '../../../core/services/api/api.service';
import Swal from 'sweetalert2';
@Component({
    selector: 'app-nav',
    standalone: true,
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.scss',
    imports: [MaterialModule, RouterModule, SidebarComponent, TransformDataTablePipe]
})
export class NavComponent {
  role:string = '';
  @ViewChild('drawer') drawer!: MatDrawer;
  constructor(private router:Router,private browser:BrowserService,service:GraphqlService,private api:ApiService){
    service.getRole().subscribe(data=>{
      this.role = data  
    })
  }
  toggleDrawer() {
    this.drawer.toggle();
  }
  close(){
    this.api.inactiveUser(this.browser.browserToken()).subscribe(data=>{
      this.browser.clearBrowserToken();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Log out Successfully',
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        this.router.navigate(['/auth/login']);
      }, 2000);
      // this.router.navigate(['/auth/login']);
    });
  }
}
