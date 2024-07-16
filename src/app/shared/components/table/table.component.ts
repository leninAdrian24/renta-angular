import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
  signal,
} from '@angular/core';
// import { MaterialModule } from '../../material/material.module';
import { MaterialModule } from '../../../core/material/material.module';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { CommonModule, DatePipe } from '@angular/common';
import {
  of as observableOf,
  catchError,
  map,
  merge,
  startWith,
  switchMap,
  Subject,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs';
import { FieldsInterface } from '../../utils/table/interface/table';
import { MatMenuModule } from '@angular/material/menu';
import { GraphqlService } from '../../../core/services/graphql/graphql.service';
import { MatList } from '@angular/material/list';
import { TransformDataTablePipe } from '../../../core/pipes/transform-data-table.pipe';
import { RouterModule } from '@angular/router';
import { Table } from '../../utils/graphql/interfaces/graphql';
@Component({
  selector: 'app-table',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  imports: [
    MaterialModule,
    DatePipe,
    CommonModule,
    MatMenuModule,
    TransformDataTablePipe,
    RouterModule,
  ],
})
export class TableComponent implements AfterViewInit, OnInit {
  @Input({ required: true }) columns!: any[];
  @Input({ required: true }) query!: Table;
  @Input({ required: true }) fields!: FieldsInterface;
  @Input({ required: true }) tableName!: string;
  @Input({ required: true }) route!: string;
  selectedOptions: string[] = [];
  filterOptions: string = '';
  displayedColumns: string[] = [];
  data = signal<any[]>([]);
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  columnsFilter: any[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatList) shoes!: MatList;
  searchInput = new Subject<string | null>();
  buttonClick$ = new Subject<void>();
  searchValue = '';
  reset = true;
  statusInactive = false;
  btnCreate = false;
  deleteColumns: string[] = ['position', 'actions', 'id', 'status', 'date'];
  status: string = 'active';
  constructor(private service: GraphqlService) {}
  ngAfterViewInit() {
    merge(
      this.sort.sortChange,
      this.paginator.page,
      this.searchInput.pipe(debounceTime(300), distinctUntilChanged()),
      this.buttonClick$
    )
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.service
            .getTable(
              this.query,
              this.sort.active,
              this.sort.direction,
              this.paginator.pageIndex + 1,
              this.paginator.pageSize,
              this.searchValue,
              this.filterOptions,
              this.status
            )
            .pipe(catchError(() => observableOf(null)));
        }),
        map((result: any) => {
          let data: any;
          if (result) {
            let items: any = result[this.tableName].data;
            data = items.map((item: any) => {
              
              let { id, attributes } = item;
              if (this.tableName == 'usersPermissionsUsers') {
                let { profile, ...rest } = attributes;
                return {
                  id: id,
                  profile: profile && profile.data.length > 0 ? `https://renta-strapi.onrender.com${attributes.profile.data[0].attributes.url}` : 'img/avatar.svg',
                  ...rest,
                }
              } else if(this.tableName == 'cars') {
                const {brand, type_car,image,...rest} = attributes;
                
                return {
                  id: id,
                  brand: 
                    brand.data ? {
                      id:brand.data.id,
                      brand:brand.data.attributes.brand
                    } : {
                      id:0,
                      brand:''
                    },
                  type_car: 
                    type_car.data ? {
                      id:type_car.data.id,
                      type:type_car.data.attributes.type
                    } : {
                      id:0,
                      type:''
                    },
                  image:image.data[0].attributes.url ? `https://renta-strapi.onrender.com${image.data[0].attributes.url}` : 'img/avatar.svg',
                  ...rest,
                }
              }else{
                console.log('brand')
                return {
                  id: item.id,
                  ...item.attributes,
                };
              }
            });
            this.isLoadingResults = false;
            this.isRateLimitReached = data === null;
            if (data === null) {
              return [];
            }
            this.resultsLength = result[this.tableName].meta.pagination.total;
          }
          return data;

          // let data:any;
          // if(result){
          //   const items:any[] = result[this.tableName].data;
          //   data = items.forEach((item:any) =>{
          //     let {id,attributes}:any = item;
          //     if(attributes.profile){
          //       let {profile,...rest} = attributes;
          //       if(profile && profile.data[0]){
          //         profile = `https://renta-strapi.onrender.com${profile.data[0].attributes.url}`;
          //         return {
          //           id: id,
          //           profile: profile ,
          //           ...rest,
          //         }
          //       }else{
          //         return {
          //           id: item.id,
          //           profile: 'img/avatar.svg',
          //           ...rest,
          //         }
          //       }
          //     }else{
          //       return {
          //         id: item.id,
          //         ...item.attributes,
          //       }
          //     }
          //   });
          //
          // }
          // return [];
        })
      )
      .subscribe((data) => this.data.set(data));
    // this.service.
  }
  ngOnInit(): void {
    this.service.getRole().subscribe((data) => {
      if (data == 'admin') {
        this.columns = [...this.columns, 'actions'];
        this.btnCreate = true;
      }
      this.selectedOptions = [...this.columns];
      this.displayedColumns = [...this.columns];
      this.columnsFilter = this.columns.filter(
        (column) => !this.deleteColumns.includes(column)
      );
    });
  }
  onSelectionChange(event: any) {
    console.log(event);
    if (event.value.includes('reset') || event.value.length == 0) {
      this.selectedOptions = [...this.columns];
      this.displayedColumns = [...this.columns];
    } else {
      this.displayedColumns = event.value;
    }
  }
  onSearchChange(event: any) {
    if (event.value === 'reset') {
      this.filterOptions = '';
      this.reset = true;
    } else {
      this.reset = false;
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.searchValue = filterValue;
    this.searchInput.next(filterValue);
  }
  delete(id: string) {
    alert(id);
  }
  dataStatus() {
    this.statusInactive = !this.statusInactive;
    this.paginator.pageIndex = 0;
    if (this.statusInactive == true) {
      this.status = 'inactive';
      this.isLoadingResults = true;
      this.buttonClick$.next();
    } else {
      this.status = 'active';
      this.isLoadingResults = true;
      this.buttonClick$.next();
    }
  }
}
const customTable: any = {
  profile: (value: any, data: any) => {},
};
