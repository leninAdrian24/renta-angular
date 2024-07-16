import { Component } from '@angular/core';
import { ColumnsArray, FieldsInterface } from '../../../../shared/utils/table/interface/table';
import { Config } from '../../../../shared/utils/table/config/config';
import { TableComponent } from "../../../../shared/components/table/table.component";

@Component({
  selector: 'app-brands-list',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './brands-list.component.html',
  styleUrl: './brands-list.component.scss'
})
export class BrandsListComponent {
  columns:ColumnsArray;
  query:any;
  fields:FieldsInterface;
  constructor(private table:Config){
    this.columns = this.table.getTable('brands').columns;
    this.query = this.table.getTable('brands').query;
    this.fields = this.table.getTable('brands').fields;
  }
}
