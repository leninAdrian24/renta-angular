import { Component } from '@angular/core';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { ColumnsArray, FieldsInterface } from '../../../../shared/utils/table/interface/table';
import { Config } from '../../../../shared/utils/table/config/config';

@Component({
    selector: 'app-users-list',
    standalone: true,
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    imports: [TableComponent]
})
export class UsersListComponent {
    columns:ColumnsArray;
    query:any;
    fields:FieldsInterface;
    constructor(private table:Config){
        this.columns = this.table.getTable('users').columns;
        this.query = this.table.getTable('users').query;
        this.fields = this.table.getTable('users').fields;
    }
}
