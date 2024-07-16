import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatTreeModule} from '@angular/material/tree';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import { DomSanitizer } from '@angular/platform-browser';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  exports:[
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatTreeModule,
    MatBadgeModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatDividerModule,
  ]
})
export class MaterialModule { 
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer){
    matIconRegistry.addSvgIcon(
      'excel',
      domSanitizer.bypassSecurityTrustResourceUrl('icons/excel_alternate.svg') // Usando tu icono personalizado
    );
    matIconRegistry.addSvgIcon(
      'csv',
      domSanitizer.bypassSecurityTrustResourceUrl('icons/csv.svg') // Usando tu icono personalizado
    );
    matIconRegistry.addSvgIcon(
      'pdf',
      domSanitizer.bypassSecurityTrustResourceUrl('icons/pdf.svg') // Usando tu icono personalizado
    );
    matIconRegistry.addSvgIcon(
      'userRegister',
      domSanitizer.bypassSecurityTrustResourceUrl('icons/user-register.svg') // Usando tu icono personalizado
    );
    matIconRegistry.addSvgIcon(
      'entry',
      domSanitizer.bypassSecurityTrustResourceUrl('icons/entry.svg') // Usando tu icono personalizado
    );
    matIconRegistry.addSvgIcon(
      'entry2',
      domSanitizer.bypassSecurityTrustResourceUrl('icons/entry2.svg') // Usando tu icono personalizado
    );
    matIconRegistry.addSvgIcon(
      'folder',
      domSanitizer.bypassSecurityTrustResourceUrl('icons/folder.svg') // Usando tu icono personalizado
    );

  }
}
