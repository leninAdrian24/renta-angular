import { Component } from '@angular/core';
import { TableComponent } from "../../../../shared/components/table/table.component";
import { Config } from '../../../../shared/utils/table/config/config';
import { ColumnsArray, FieldsInterface } from '../../../../shared/utils/table/interface/table';
import { DocumentNode } from 'graphql';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-currencys-list',
    standalone: true,
    templateUrl: './currencys-list.component.html',
    styleUrl: './currencys-list.component.scss',
    imports: [TableComponent,CommonModule]
})
export class CurrencysListComponent {
  columns:ColumnsArray;
  query:any;
  fields:FieldsInterface;
  constructor(private table:Config){
    this.columns = this.table.getTable('currencys').columns;
    this.query = this.table.getTable('currencys').query;
    this.fields = this.table.getTable('currencys').fields;
  }
}
