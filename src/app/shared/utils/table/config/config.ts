import { Injectable } from "@angular/core";
import { DisplayColumns } from "../displayColumns/display-columns";
import { Tables } from "../interface/table";
import { Query } from "../../graphql/query/query";
@Injectable({
  providedIn: 'root'
})
export class Config {
  constructor(private columns:DisplayColumns, private query:Query){}
  getTable(tableName:Tables){
    return {
      columns: this.columns.getColumns(tableName),
      fields: this.columns.getFields(tableName),
      query: this.query.getTablesQuery(tableName)
    }
  }
}
