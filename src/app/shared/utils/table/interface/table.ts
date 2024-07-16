import { DocumentNode } from "graphql";
export type ColumnsArray = ['id',...string[]] | ['id',...string[],'actions'];
export interface FieldsInterface{
  [key:string]:string;
}
export interface DataInterface{
  fields:FieldsInterface;
  columns:ColumnsArray
}
export type TableInterface = {
  [key in Tables]: DataInterface;
};

export type QueryInterface ={
  [key in Tables]: {
    field:DocumentNode;
    filter:DocumentNode;
  }
    
}
export type Tables = 
  // 'login'|
  // 'register'|
  'currencys' | 
  // 'setting' | 
  'users' | 
  'brands' | 
  'cars' | 
  'rentals' |
  // 'report' |
  'types' |
  'clients' |
  'documents' 
  
