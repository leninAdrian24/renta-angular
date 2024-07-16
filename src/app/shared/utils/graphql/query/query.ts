import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import { QueryInterfaces, Table } from '../interfaces/graphql';
import { Tables } from '../../table/interface/table';
import { DocumentNode } from 'graphql';

@Injectable({
  providedIn: 'root',
})
export class Query {
  private queries: QueryInterfaces = {
    tables: {
      currencys: {
        field: gql`
          query (
            $page: Int!
            $pageSize: Int!
            $sort: [String!]
            $filter: CurrencyFiltersInput
          ) {
            currencies(
              sort: $sort
              pagination: { page: $page, pageSize: $pageSize }
              filters: $filter
            ) {
              data {
                id
                attributes {
                  symbol
                  name
                  status
                }
              }
              meta {
                pagination {
                  total
                  pageSize
                }
              }
            }
          }
        `,
        filter: gql`
          query (
            $page: Int!
            $pageSize: Int!
            $sort: [String!]
            $filter: String
            $status: String
          ) {
            currencies(
              sort: $sort
              pagination: { page: $page, pageSize: $pageSize }
              filters: {
                status: { eq: $status }
                or: [
                  { symbol: { contains: $filter } }
                  { name: { contains: $filter } }
                ]
              }
            ) {
              data {
                id
                attributes {
                  symbol
                  name
                  status
                }
              }
              meta {
                pagination {
                  total
                  pageSize
                }
              }
            }
          }
        `,
      },
      users: {
        field: gql`
          query (
            $page: Int!
            $pageSize: Int!
            $sort: [String!]
            $filter: UsersPermissionsUserFiltersInput
          ) {
            usersPermissionsUsers(
              sort: $sort
              pagination: { page: $page, pageSize: $pageSize }
              filters: $filter
            ) {
              data {
                id
                attributes {
                  username
                  name
                  last_name
                  email
                  phone
                  address
                  date
                  status
                  profile {
                    data {
                      attributes {
                        name
                        url
                      }
                    }
                  }
                }
              }
              meta {
                pagination {
                  total
                  pageSize
                }
              }
            }
          }
        `,
        filter: gql`
          query (
            $page: Int!
            $pageSize: Int!
            $sort: [String!]
            $filter: String
            $status: String
          ) {
            usersPermissionsUsers(
              sort: $sort
              pagination: { page: $page, pageSize: $pageSize }
              filters: {
                status: { eq: $status }
                or: [
                  { username: { containsi: $filter } }
                  { name: { containsi: $filter } }
                  { last_name: { containsi: $filter } }
                  { email: { containsi: $filter } }
                  { address: { containsi: $filter } }
                ]
              }
            ) {
              data {
                id
                attributes {
                  username
                  name
                  last_name
                  email
                  phone
                  address
                  date
                  status
                  profile {
                    data {
                      attributes {
                        name
                        url
                      }
                    }
                  }
                }
              }
              meta {
                pagination {
                  total
                  pageSize
                }
              }
            }
          }
        `,
      },
      brands: {
        field: gql`
          query (
            $page: Int!
            $pageSize: Int!
            $sort: [String!]
            $filter: String
            $status: String
          ) {
            brands(
              sort: $sort
              pagination: { page: $page, pageSize: $pageSize }
              filters: $filter
            ) {
              data {
                id
                attributes {
                  brand
                  status
                  date
                }
              }
              meta {
                pagination {
                  total
                  pageSize
                }
              }
            }
          }
        `,
        filter: gql`
          query (
            $page: Int!
            $pageSize: Int!
            $sort: [String!]
            $filter: String
            $status: String
          ) {
            brands(
              sort: $sort
              pagination: { page: $page, pageSize: $pageSize }
              filters: {
                status: { eq: $status }
                or: [
                  { brand: { contains: $filter } }
                  { status: { contains: $filter } }
                ]
              }
            ) {
              data {
                id
                attributes {
                  brand
                  status
                  date
                }
              }
              meta {
                pagination {
                  total
                  pageSize
                }
              }
            }
          }
        `,
      },
      cars: {
        field: gql`
          query (
            $page: Int!
            $pageSize: Int!
            $sort: [String!]
            $filter: CarFiltersInput
          ) {
            cars(
              sort: $sort
              pagination: { page: $page, pageSize: $pageSize }
              filters: $filter
            ) {
              data {
                id
                attributes {
                  plate
                  model
                  brand {
                    data {
                      id
                      attributes {
                        brand
                      }
                    }
                  }
                  type_car {
                    data {
                      id
                      attributes {
                        type
                      }
                    }
                  }
                  image {
                    data {
                      attributes {
                        name
                        url
                      }
                    }
                  }
                  availability
                  price_day
                  date
                  status
                }
              }
              meta {
                pagination {
                  total
                  pageSize
                }
              }
            }
          }
        `,
        filter: gql`
          query (
            $page: Int!
            $pageSize: Int!
            $sort: [String!]
            $filter: String
            $status: String
          ) {
            cars(
              sort: $sort
              pagination: { page: $page, pageSize: $pageSize }
              filters: {
                status: { eq: $status }
                or: [
                  { plate: { contains: $filter } }
                  { model: { contains: $filter } }
                  { brand: { brand: { contains: $filter } } }
                  { type_car: { type: { contains: $filter } } }
                ]
              }
            ) {
              data {
                id
                attributes {
                  plate
                  model
                  brand {
                    data {
                      id
                      attributes {
                        brand
                      }
                    }
                  }
                  type_car {
                    data {
                      id
                      attributes {
                        type
                      }
                    }
                  }
                  image {
                    data {
                      attributes {
                        name
                        url
                      }
                    }
                  }
                  availability
                  price_day
                  date
                  status
                }
              }
              meta {
                pagination {
                  total
                  pageSize
                }
              }
            }
          }
        `,
      },
      rentals: {
        field: gql`
          query ($sort: String, $page: Number, $pageSize: Number) {
            currencies(
              sort: $sort
              pagination: { page: $page, pageSize: $pageSize }
            ) {
              data {
                id
                attributes {
                  symbol
                  name
                  status
                }
              }
            }
          }
        `,
        filter: gql`
          query ($sort: String, $page: Number, $pageSize: Number) {
            currencies(
              sort: $sort
              pagination: { page: $page, pageSize: $pageSize }
            ) {
              data {
                id
                attributes {
                  symbol
                  name
                  status
                }
              }
            }
          }
        `,
      },
      types: {
        field: gql`
          query (
            $page: Int!
            $pageSize: Int!
            $sort: [String!]
            $filter: TypeCarFiltersInput
          ) {
            typeCars(
              sort: $sort
              pagination: { page: $page, pageSize: $pageSize }
              filters: $filter
            ) {
              data {
                id
                attributes {
                  type
                  status
                }
              }
              meta {
                pagination {
                  total
                  pageSize
                }
              }
            }
          }
        `,
        filter: gql`
          query (
            $page: Int!
            $pageSize: Int!
            $sort: [String!]
            $filter: String
            $status: String
          ) {
            typeCars(
              sort: $sort
              pagination: { page: $page, pageSize: $pageSize }
              filters: {
                status: { eq: $status }
                or: [{ type: { contains: $filter } }]
              }
            ) {
              data {
                id
                attributes {
                  type
                  status
                }
              }
              meta {
                pagination {
                  total
                  pageSize
                }
              }
            }
          }
        `,
      },
      clients: {
        field: gql`
          query (
            $page: Int!
            $pageSize: Int!
            $sort: [String!]
            $filter: ClientFiltersInput
          ) {
            clients(
              sort: $sort
              pagination: { page: $page, pageSize: $pageSize }
              filters: $filter
            ) {
              data {
                id
                attributes {
                  dni
                  name
                  address
                  phone
                  date
                  status
                }
              }
              meta {
                pagination {
                  total
                  pageSize
                }
              }
            }
          }
        `,
        filter: gql`
          query (
            $page: Int!
            $pageSize: Int!
            $sort: [String!]
            $filter: String
            $status: String
          ) {
            clients(
              sort: $sort
              pagination: { page: $page, pageSize: $pageSize }
              filters: {
                status: { eq: $status }
                or: [
                  { dni: { contains: $filter } }
                  { name: { contains: $filter } }
                  { address: { contains: $filter } }
                ]
              }
            ) {
              data {
                id
                attributes {
                  dni
                  name
                  address
                  phone
                  date
                  status
                }
              }
              meta {
                pagination {
                  total
                  pageSize
                }
              }
            }
          }
        `,
      },
      documents: {
        field: gql`
          query (
            $page: Int!
            $pageSize: Int!
            $sort: [String!]
            $filter: DocumentFiltersInput
          ) {
            documents(
              sort: $sort
              pagination: { page: $page, pageSize: $pageSize }
              filters: $filter
            ) {
              data {
                id
                attributes {
                  document
                  date
                  status
                }
              }
              meta {
                pagination {
                  total
                  pageSize
                }
              }
            }
          }
        `,
        filter: gql`
          query (
            $page: Int!
            $pageSize: Int!
            $sort: [String!]
            $filter: String
            $status: String
          ) {
            documents(
              sort: $sort
              pagination: { page: $page, pageSize: $pageSize }
              filters: {
                status: { eq: $status }
                or: [{ document: { contains: $filter } }]
              }
            ) {
              data {
                id
                attributes {
                  document
                  status
                  date
                }
              }
              meta {
                pagination {
                  total
                  pageSize
                }
              }
            }
          }
        `,
      },
    },
    dashboard: gql`
      query {
        usersPermissionsUsers {
          meta {
            pagination {
              total
            }
          }
        }
        clients {
          meta {
            pagination {
              total
            }
          }
        }
        cars {
          meta {
            pagination {
              total
            }
          }
        }
        typeCars {
          meta {
            pagination {
              total
            }
          }
        }
      }
    `,
    role: gql`
      query ($id: ID!) {
        usersPermissionsUsers(filters: { id: { eq: $id } }) {
          data {
            attributes {
              role {
                data {
                  attributes {
                    name
                  }
                }
              }
            }
          }
        }
      }
    `,
    username: gql`
      query ($id: ID!) {
        usersPermissionsUsers(filters: { id: { eq: $id } }) {
          data {
            attributes {
              username
            }
          }
        }
      }
    `,
    autocomplete: {
      clients: undefined,
      cars: undefined,
      documents: undefined,
      brands: undefined,
      types: undefined,
    },
  };
  getTablesQuery(TableName: Tables): Table {
    return this.queries.tables[TableName];
  }
  getDashboardQuery(): DocumentNode {
    return this.queries.dashboard;
  }
  getRoleQuery(): DocumentNode {
    return this.queries.role;
  }
  getUsernameQuery(): DocumentNode {
    return this.queries.username;
  }
}
