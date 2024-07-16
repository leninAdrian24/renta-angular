import { Component } from '@angular/core';
import { ColumnsArray, FieldsInterface } from '../../../../shared/utils/table/interface/table';
import { Config } from '../../../../shared/utils/table/config/config';
import { TableComponent } from "../../../../shared/components/table/table.component";
@Component({
  selector: 'app-types-list',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './types-list.component.html',
  styleUrl: './types-list.component.scss'
})
export class TypesListComponent {
  columns:ColumnsArray;
  query:any;
  fields:FieldsInterface;
  constructor(private table:Config){
    this.columns = this.table.getTable('types').columns;
    this.query = this.table.getTable('types').query;
    this.fields = this.table.getTable('types').fields;
  }
}
