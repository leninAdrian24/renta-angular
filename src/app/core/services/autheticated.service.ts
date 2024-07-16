import { Injectable } from '@angular/core';
import { GraphqlService } from './graphql/graphql.service';
import { catchError, map, of } from 'rxjs';
import { Router } from '@angular/router';
import { BrowserService } from './browser/browser.service';
@Injectable({
  providedIn: 'root'
})
export class AutheticatedService {

  constructor( private graphql:GraphqlService,private router:Router, private browser:BrowserService) { }
  isAutheticated():boolean{
    const token = this.browser.browserToken();
    if(!token){
      return false;
    }else{
      const expired = this.expirationToken(token);
      if(expired === true){
        return false;
      }
      return true;
    }
  }
  private expirationToken(token:string):boolean | string{
    const tokenParts = token.split('.');
    console.log(tokenParts);
    if(tokenParts.length !==3){
      return 'Token JWT Invalido';
    }
    const payload = JSON.parse(atob(tokenParts[1]));
    const expirationDate = new Date(0); // Epoch
    expirationDate.setUTCSeconds(payload.exp);
    const dateUtc = new Date();
    console.log('Fecha actual:', dateUtc);
    console.log('Fecha de expiración:', expirationDate);
    if (expirationDate <= dateUtc){
      console.log('El token ha expirado');
      return true;
    } else {
      console.log('El token todavía es válido');
      return false;
    }
  }
  getRol(allRoles:string[]){
    return this.graphql.getRole().pipe(
      map(role=>{
        console.log('El rol del usuario es:', role);
        if(this.checkRoleValidity(role,allRoles)){
          return true;
        }else{
          return this.router.parseUrl('/dashboard');
        }
      }),
      catchError(()=>of(this.router.parseUrl('/dashboard'))),
    )
  }
  private checkRoleValidity(role:string, allRoles:string[]):boolean{
    return allRoles.includes(role);
  }
  
}
