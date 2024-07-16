import { Component } from '@angular/core';
import { ColumnsArray, FieldsInterface } from '../../../../shared/utils/table/interface/table';
import { Config } from '../../../../shared/utils/table/config/config';
import { TableComponent } from "../../../../shared/components/table/table.component";

@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.scss'
})
export class CarsListComponent {
  columns:ColumnsArray;
  query:any;
  fields:FieldsInterface;
  constructor(private table:Config){
    this.columns = this.table.getTable('cars').columns;
    this.query = this.table.getTable('cars').query;
    this.fields = this.table.getTable('cars').fields;
  }
}
