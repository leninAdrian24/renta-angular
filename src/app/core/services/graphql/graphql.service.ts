import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { catchError, map, of, throwError } from 'rxjs';
import { Query } from '../../../shared/utils/graphql/query/query';
import { BrowserService } from '../browser/browser.service';
import { DocumentNode } from 'graphql';

@Injectable({
  providedIn: 'root',
})
export class GraphqlService {
  // headers: any = {
  //   authorization: `Bearer ${window.localStorage.getItem('token')}`,
  // };
  constructor(private apollo: Apollo, private query:Query,private browser:BrowserService) {}
  private Headers(token:string){
    return {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`,
    };
  }
  getDashboard() {
    const token = this.browser.browserToken();  // Get token from browser service
    if(!token){
      return of(null);
    }else{
      return this.apollo
        .query({
          query: this.query.getDashboardQuery(),
          context: {
            headers: this.Headers(token),
          },
        })
        .pipe(map((result: any) => result.data));
    }
  }
  getTable(
    query: any,
    sort: string,
    sortOrder: string,
    page: number,
    pageSize: number,
    filter?: string | any,
    field?: string,
    status: string = "active"
  ) {
    const token = this.browser.browserToken();  // Get token from browser service
    if(!token){
      return of(null);
    }
    else{
      if (field && filter) {
        query = query.field;
        filter = {
          status:{eq:status},
          [field]:{
            contains:filter
          },
        }
        // console.log(filter);
      } else {
        query = query.filter;
      }
      return this.apollo.watchQuery({
          query: query,
          context: {
            headers: this.Headers(token),
          },
          variables: {
            filter: filter,
            sort: [`${sort}:${sortOrder}`],
            page: page,
            pageSize: pageSize,
            status: status,
          },
      })
      .valueChanges.pipe(map((result: any) => result.data))
      // catchError((error) => throwError(() => error))
      // );
    }
  }
  
  getRole() {
    const token = this.browser.browserToken();  // Get token from browser service
    if(!token){
      return of(null);
    }else{
      const {id} = JSON.parse(atob(token.split('.')[1]));
      return this.apollo
            .watchQuery({
              query: this.query.getRoleQuery(),
              context: {
                headers: this.Headers(token),
              },
              variables: {
                id,
              },
            })
            .valueChanges.pipe(
              map(({ data }:any) => data.usersPermissionsUsers.data[0].attributes.role.data.attributes.name
            ),
              catchError((error) => throwError(() => error))
            );
    }
  }
  getUsername() {
    const token = this.browser.browserToken(); 
    if(!token){
      return of(null);
    }else{
      const {id} = JSON.parse(atob(token.split('.')[1]));
      return this.apollo.watchQuery({
          query: this.query.getUsernameQuery(),
          context: {
            headers: this.Headers(token),
          },
          variables: {
            id,
          },
      })
      .valueChanges.pipe(
        map(({ data }:any) => data.usersPermissionsUsers.data[0].attributes.username
      ),
        catchError((error) => throwError(() => error))
      );
    }
  }
}
