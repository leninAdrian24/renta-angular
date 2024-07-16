import { Component } from '@angular/core';
import { ColumnsArray, FieldsInterface } from '../../../../shared/utils/table/interface/table';
import { Config } from '../../../../shared/utils/table/config/config';
import { TableComponent } from "../../../../shared/components/table/table.component";

@Component({
  selector: 'app-rentals-list',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './rentals-list.component.html',
  styleUrl: './rentals-list.component.scss'
})
export class RentalsListComponent {
  columns:ColumnsArray;
  query:any;
  fields:FieldsInterface;
  constructor(private table:Config){
    this.columns = this.table.getTable('currencys').columns;
    this.query = this.table.getTable('currencys').query;
    this.fields = this.table.getTable('currencys').fields;
  }
}
