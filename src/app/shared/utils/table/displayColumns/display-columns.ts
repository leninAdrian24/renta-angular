import { Injectable } from "@angular/core";
import { ColumnsArray, FieldsInterface, TableInterface, Tables } from "../interface/table";
import { profile } from "console";

@Injectable({
  providedIn: 'root'
})
export class DisplayColumns {
  private columns:TableInterface = {
    currencys: {
      fields: {
        // position:'Position',
        id:'ID',
        symbol:'Symbol',
        name:'Name',
        status:'Status',
        actions:'Actions',
      },
      columns: ['id','symbol','name','status']
    },
    // setting: {
    //   fields: {},
    //   columns: ['position']
    // },
    users: {
      fields: {
        // position:'Position',
        id:'ID',
        username:'Username',
        name:'Name',
        last_name:'Last Name',
        email:'Email',
        phone:'Phone',
        address:'Address',
        date:'Date',
        profile:'Profile',
        status:'Status',
        actions:'Actions'
      },
      columns: ['id','username','name','last_name','email','phone','address','date','profile','status']
    },
    brands: {
      fields: {
        // position:'Position',
        id:'ID',
        brand:'Brand',
        status:'Status',
        date:'Date',
        actions:'Actions',
      },
      columns: ['id','brand','status','date']
    },
    cars:{
      fields: {
        // position:'Position',
        id:'ID',
        plate:'Plate',
        model:'Model',
        brand:'Brand',
        type_car:'Type Car',
        image:'Imagen',
        availability:'Availability',
        price_day:'Price Day',
        date:'Date',
        status:'Status',
        actions:'Actions',
      },
      columns: ['id','plate','model','brand','type_car','image','availability','price_day','date','status']
    },
    rentals: {
      fields: {
        position:'Position',
        id:'ID',
        price_day:'Price Day',
        payment:'Payment',
        number_days:'Number Days',
        loan_date:'Loan Date',
        hour:'Hour',
        date_return:'Date Return',
        observation:'Observation',
        status:'Status',
        actions:'Actions',
      },
      columns: ['id','price_day','payment','number_days','loan_date','hour','date_return','observation','status']
    },
    // report: {
    //   fields: {},
    //   columns: ['position']
    // },
    types: {
      fields: {
        position:'Position',
        id:'ID',
        type:'Type',
        status:'Status',
        actions:'Actions',
      },
      columns: ['id','type','status']
    },
    clients: {
      fields: {
        position:'Position',
        id:'ID',
        dni:'DNI',
        name:'Name',
        address:'Address',
        phone:'Phone',
        date:'Date',
        status:'Status',
        actions:'Actions',
      },
      columns: ['id','dni','name','address','phone','date','status']
    },
    documents: {
      fields: {
        position:'Position',
        id:'ID',
        document:'Document',
        status:'Status',
        date:'Date',
        actions:'Actions',
      },
      columns: ['id','document','date','status']
    }
  };
  getColumns(table: Tables): ColumnsArray {
    return this.columns[table].columns;
  }
  getFields(table: Tables):FieldsInterface{
    return this.columns[table].fields;
  }
}
