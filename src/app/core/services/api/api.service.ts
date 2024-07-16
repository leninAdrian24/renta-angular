import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { SortDirection } from '@angular/material/sort';
import { Observable, catchError, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  _httpClient = inject(HttpClient);
  constructor() { }
  getRepoIssues(sort: string, order: SortDirection, page: number): Observable<any> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl = `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${
      page + 1
    }`;
    return this._httpClient.get<any>(requestUrl);
  }
  get():Observable<any>{
    return this._httpClient.get(`https://renta-strapi.onrender.com/api/users`);
  }
  login(url:string,body:{[key:string]:string}):Observable<any>{
    return this._httpClient.post(`https://renta-strapi.onrender.com/api/${url}`,body);
  }
  getId(url:string,token:string):Observable<any>{
    return this._httpClient.get(`https://renta-strapi.onrender.com/api/${url}`,{headers: {'Content-Type': 'application/json','authorization': `Bearer ${token}`}});
  }
  post(url:string,body:{[key:string]:string},token:string):Observable<any>{
    return this._httpClient.post(`https://renta-strapi.onrender.com/api/${url}`,body,{headers: {'Content-Type': 'application/json','authorization': `Bearer ${token}`}});
  }
  put(url:string,body:{[key:string]:string},token:string):Observable<any>{
    return this._httpClient.put(`https://renta-strapi.onrender.com/api/${url}`,body,{headers: {'Content-Type': 'application/json','authorization': `Bearer ${token}`}});
  }
  activeUser(token:string):Observable<any>{
    if(!token){
      return of(null);
    }
    const {id} = JSON.parse(atob(token.split('.')[1]));
    return this._httpClient.put(`https://renta-strapi.onrender.com/api/users/${id}`,{status:'active'},
      {headers: {'Content-Type': 'application/json','authorization': `Bearer ${token}`}});
  }
  inactiveUser(token:string):Observable<any>{
    if(!token){
      return of(null);
    }
    const {id} = JSON.parse(atob(token.split('.')[1]));
    return this._httpClient.put(`https://renta-strapi.onrender.com/api/users/${id}`,{status:'inactive'},{headers: {'Content-Type': 'application/json','authorization': `Bearer ${token}`}});
  }
}
