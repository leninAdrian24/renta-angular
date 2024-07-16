import { FormBuilder, FormGroup } from '@angular/forms';
import { Fields } from '../fields/fields';
import Swal from 'sweetalert2';
import { Injectable } from '@angular/core';
import { ApiService } from '../../../../core/services/api/api.service';
import { Router } from '@angular/router';
import { BrowserService } from '../../../../core/services/browser/browser.service';
import { FormName, FormTypes, FunctionForm, FunctionFormUpdate, UpdateForm} from '../interfaces/form-interface';
import { FunctionsForm } from '../functionsForm/functions-form';
@Injectable({
  providedIn: 'root',
})
export class FormConfig {
  constructor(
    private fields: Fields,
    private fb: FormBuilder,
    private functionsForm:FunctionsForm,
    private service: ApiService,
    private router: Router,
    private browser: BrowserService,
  ) {}
  getControls(formName: FormName) {
    const formFields = this.fields.getFields(formName);
    const controls: { [key: string]: any } = {};
    formFields.forEach((field) => {
      controls[field.name] = [
        { value: field.value, disabled: field.disable },
        field.validators,
      ];
    });
    return { formFields, formBuilder: this.fb.group(controls) };
  }
  submitForm(formName:FormTypes,form: FormGroup, url: string, navigate:string,id:string,msjSuccess: string,msjError: string) {
    if (form.invalid) {
      this.alertError('Form is invalid');
      return;
    }
    return this.handleForm(formName,form,this.service,id,this.browser,url,navigate,this.router,msjSuccess, msjError)
    
  }
  updateForm(formName: UpdateForm,form: FormGroup<any>, service:ApiService,id:string,browser:BrowserService,url: string, router:Router,msjSuccess: string, msjError: string){
    const updateForm:FunctionFormUpdate = this.functionsForm.getFunctionsFormUpdate(formName);
    updateForm(form, service, id, browser,url, router, msjSuccess, msjError);
  }
  // getFunctionsFormUpdate(key: UpdateForm): (form: FormGroup<any>, service:ApiService,id:string,url: string,router:Router,msjSuccess: string, msjError: string) => void {
  //   return this.functionsFormUpdate[key];
  // }
  alertError(message: string) {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: message,
      showConfirmButton: false,
      timer: 1500,
    });
  }
  alertSuccess(message: string) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500,
    });
  }
  handleForm(formName: FormTypes,form: FormGroup<any>, service:ApiService,id:string,browser:BrowserService,url: string,navigate:string, router:Router,msjSuccess: string, msjError: string):void{
    const formFunction:FunctionForm= this.functionsForm.getFunctionsForm(formName);
    formFunction(form, service,id,browser,url,navigate,router ,msjSuccess, msjError);
  }
}
