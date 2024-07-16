import { FormGroup } from "@angular/forms";
import { FormTypes, FunctionForm, FunctionFormUpdate, FunctionsFormInterface, FunctionsFormUpdateInterface, UpdateForm } from "../interfaces/form-interface";
import { ApiService } from "../../../../core/services/api/api.service";
import { BrowserService } from "../../../../core/services/browser/browser.service";
import { Injectable } from "@angular/core";
import Swal from "sweetalert2";
import { Router } from "@angular/router";
import { map } from "rxjs";
import { Observable } from "@apollo/client/utilities";
function alertSuccess(message: string) {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
}  
function alertError(message: string) {
  Swal.fire({
    position: 'center',
    icon: 'error',
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
}
function timeout(time: number,router: Router,navigate:string) {
  setTimeout(() => {
    router.navigate([navigate]);
  }, time);
}

function getId(service: ApiService, id:string,browser: BrowserService, url: string,):any{
  return service.getId(`${url}/${id}`,browser.browserToken()).pipe(map(result => result));

}
function post(form: FormGroup<any>, service: ApiService, browser: BrowserService, url: string, navigate: string, router: Router, msjSuccess: string, msjError: string):void {
  service.post(url,form.getRawValue(),browser.browserToken()).subscribe(data => {
    alertSuccess(msjSuccess)
    timeout(2000,router,navigate)
  },(err) => {
    alertError(msjError);
  })
}
function put(form: FormGroup<any>, service: ApiService,id:string ,browser: BrowserService, url: string, navigate: string, router: Router, msjSuccess: string, msjError: string):void {
  service.put(`${url}/${id}`, form.value,browser.browserToken()).subscribe(
    (data: any) => {
      alertSuccess(msjSuccess);
      timeout(2000,router,navigate);
    },
    (err) => {
      alertError(msjError);
    }
  );
}
function postLogin(service:ApiService,url:string,form:FormGroup,browser:BrowserService,msjSuccess:string,msjError:string, router:Router,navigate:string) {
  service.login(url, form.getRawValue()).subscribe(
    (data: any) => {
      browser.setBrowserToken(data.jwt);
      service.activeUser(browser.browserToken()).subscribe(data=>{
        alertSuccess(msjSuccess);
        timeout(2000,router,navigate);
      })
    },
    (err) => {
      alertError(msjError);
    }
  );
}
@Injectable({
  providedIn: 'root',
})
export class FunctionsForm {
  public fucntionsForm:FunctionsFormInterface = {
    login: function (form: FormGroup<any>, service: ApiService, id: string, browser: BrowserService, url: string, navigate: string, router: Router, msjSuccess: string, msjError: string): void {
      return postLogin(service,url,form,browser,msjSuccess,msjError, router,navigate);
    },
    register: function (form: FormGroup<any>, service: ApiService, id: string, browser: BrowserService, url: string, navigate: string, router: Router, msjSuccess: string, msjError: string): void {
      return post(form, service, browser,url, navigate, router, msjSuccess, msjError)
    },
    currencys: function (form: FormGroup<any>, service: ApiService, id: string, browser: BrowserService, url: string, navigate: string, router: Router, msjSuccess: string, msjError: string): void {
      if(id){
        return put(form,service,id,browser,url,navigate,router,msjSuccess,msjError)
      }else{
        return post(form,service,browser,url,navigate,router,msjSuccess,msjError)
      }
    },
    users: function (form: FormGroup<any>, service: ApiService, id: string, browser: BrowserService, url: string, navigate: string, router: Router, msjSuccess: string, msjError: string): void {
      if(id){
        return put(form,service,id,browser,url,navigate,router,msjSuccess,msjError)
      }else{
        return post(form,service,browser,url,navigate,router,msjSuccess,msjError)
      }
    },
    brands: function (form: FormGroup<any>, service: ApiService, id: string, browser: BrowserService, url: string, navigate: string, router: Router, msjSuccess: string, msjError: string): void {
      if(id){
        return put(form,service,id,browser,url,navigate,router,msjSuccess,msjError)
      }else{
        return post(form,service,browser,url,navigate,router,msjSuccess,msjError)
      }
    },
    cars: function (form: FormGroup<any>, service: ApiService, id: string, browser: BrowserService, url: string, navigate: string, router: Router, msjSuccess: string, msjError: string): void {
      if(id){
        return put(form,service,id,browser,url,navigate,router,msjSuccess,msjError)
      }else{
        return post(form,service,browser,url,navigate,router,msjSuccess,msjError)
      }
    },
    rentals: function (form: FormGroup<any>, service: ApiService, id: string, browser: BrowserService, url: string, navigate: string, router: Router, msjSuccess: string, msjError: string): void {
      if(id){
        return put(form,service,id,browser,url,navigate,router,msjSuccess,msjError)
      }else{
        return post(form,service,browser,url,navigate,router,msjSuccess,msjError)
      }
    },
    types: function (form: FormGroup<any>, service: ApiService, id: string, browser: BrowserService, url: string, navigate: string, router: Router, msjSuccess: string, msjError: string): void {
      if(id){
        return put(form,service,id,browser,url,navigate,router,msjSuccess,msjError)
      }else{
        return post(form,service,browser,url,navigate,router,msjSuccess,msjError)
      }
    },
    clients: function (form: FormGroup<any>, service: ApiService, id: string, browser: BrowserService, url: string, navigate: string, router: Router, msjSuccess: string, msjError: string): void {
      if(id){
        return put(form,service,id,browser,url,navigate,router,msjSuccess,msjError)
      }else{
        return post(form,service,browser,url,navigate,router,msjSuccess,msjError)
      }
    },
    documents: function (form: FormGroup<any>, service: ApiService, id: string, browser: BrowserService, url: string, navigate: string, router: Router, msjSuccess: string, msjError: string): void {
      if(id){
        return put(form,service,id,browser,url,navigate,router,msjSuccess,msjError)
      }else{
        return post(form,service,browser,url,navigate,router,msjSuccess,msjError)
      }
    }
  }
  private functionsFormUpdate:FunctionsFormUpdateInterface = {
    currencys: function (form: FormGroup<any>, service: ApiService, id: string, browser: BrowserService, url: string, router: Router, msjSuccess: string, msjError: string): void {
      const response = getId(service, id, browser, url);
      response.subscribe((data:any) => {
        console.log(data);
        
      })
    },
    users: function (form: FormGroup<any>, service: ApiService, id: string, browser: BrowserService, url: string, router: Router, msjSuccess: string, msjError: string): void {
      const response = getId(service, id, browser, url);
      response.subscribe((data:any) => {
        console.log(data);
        
      })
      
    },
    brands: function (form: FormGroup<any>, service: ApiService, id: string, browser: BrowserService, url: string, router: Router, msjSuccess: string, msjError: string): void {
      const response = getId(service, id, browser, url);
      response.subscribe((data:any) => {
        console.log(data);
        
      })
    },
    cars: function (form: FormGroup<any>, service: ApiService, id: string, browser: BrowserService, url: string, router: Router, msjSuccess: string, msjError: string): void {
      const response = getId(service, id, browser, url);
      response.subscribe((data:any) => {
        console.log(data);
        
      })
    },
    rentals: function (form: FormGroup<any>, service: ApiService, id: string, browser: BrowserService, url: string, router: Router, msjSuccess: string, msjError: string): void {
      const response = getId(service, id, browser, url);
      response.subscribe((data:any) => {
        console.log(data);
        
      })
    },
    types: function (form: FormGroup<any>, service: ApiService, id: string, browser: BrowserService, url: string, router: Router, msjSuccess: string, msjError: string): void {
      const response = getId(service, id, browser, url);
      response.subscribe((data:any) => {
        console.log(data);
        
      })
    },
    clients: function (form: FormGroup<any>, service: ApiService, id: string, browser: BrowserService, url: string, router: Router, msjSuccess: string, msjError: string): void {
      const response = getId(service, id, browser, url);
      response.subscribe((data:any) => {
        console.log(data);
        
      })
    },
    documents: function (form: FormGroup<any>, service: ApiService, id: string, browser: BrowserService, url: string, router: Router, msjSuccess: string, msjError: string): void {
      const response = getId(service, id, browser, url);
      response.subscribe((data:any) => {
        console.log(data);
        
      })
    }
  }
  constructor(private router: Router){}

  
  getFunctionsForm(key:FormTypes): FunctionForm {
    return this.fucntionsForm[key];
  }
  getFunctionsFormUpdate(key: UpdateForm): FunctionFormUpdate {
    return this.functionsFormUpdate[key];
  }
  
}
