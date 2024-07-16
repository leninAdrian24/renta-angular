import { Component } from '@angular/core';
import { TableComponent } from "../../../shared/components/table/table.component";
import { ColumnsArray, FieldsInterface } from '../../../shared/utils/table/interface/table';
import { Config } from '../../../shared/utils/table/config/config';

@Component({
  selector: 'app-clients-list',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './clients-list.component.html',
  styleUrl: './clients-list.component.scss'
})
export class ClientsListComponent {
  columns:ColumnsArray;
  query:any;
  fields:FieldsInterface;
  constructor(private table:Config){
      this.columns = this.table.getTable('clients').columns;
      this.query = this.table.getTable('clients').query;
      this.fields = this.table.getTable('clients').fields;
  }
}
