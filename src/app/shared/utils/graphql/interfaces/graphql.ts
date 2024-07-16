import { DocumentNode } from "graphql"
import { Tables } from "../../table/interface/table"

export type QueryInterfaces  ={
  tables: {
    [key in Tables]: {
      field: DocumentNode,
      filter: DocumentNode,
    }
  },
  dashboard:DocumentNode,
  role:DocumentNode,
  username:DocumentNode,
  autocomplete:{
    clients:any,
    cars:any,
    documents:any,
    brands:any,
    types:any,
  }
}
export type Table = {
  field: DocumentNode,
  filter: DocumentNode
}