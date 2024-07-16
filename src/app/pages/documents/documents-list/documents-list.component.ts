import { Component } from '@angular/core';
import { ColumnsArray, FieldsInterface } from '../../../shared/utils/table/interface/table';
import { Config } from '../../../shared/utils/table/config/config';
import { TableComponent } from "../../../shared/components/table/table.component";

@Component({
  selector: 'app-documents-list',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './documents-list.component.html',
  styleUrl: './documents-list.component.scss'
})
export class DocumentsListComponent {
  columns:ColumnsArray;
  query:any;
  fields:FieldsInterface;
  constructor(private table:Config){
      this.columns = this.table.getTable('documents').columns;
      this.query = this.table.getTable('documents').query;
      this.fields = this.table.getTable('documents').fields;
  }
}
