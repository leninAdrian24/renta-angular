import { FormGroup, Validators } from "@angular/forms";
import { Tables } from "../../table/interface/table";
import { ApiService } from "../../../../core/services/api/api.service";
import { BrowserService } from "../../../../core/services/browser/browser.service";
import { canUseDOM } from "@apollo/client/utilities";
import { FunctionsForm } from "../functionsForm/functions-form";
import { Router } from "@angular/router";
export interface FieldsInterface {
  name: string;
  label: string;
  value: string | Date;
  type: string;
  validators:Validators;
  disable:true|false;
  options?:Options[];
  placeholder?: string;
  maxLength?: number;
  messageRequired?:string;
  messageMinLength?: string;
  messageMin?: string;
  messageMaxLength?: string;
  messageMax?: string;
  messagePattern?: string;
  messageEmail?: string;
}
export type FormFieldsInterface ={

  [key in FormName]:FieldsInterface[];
  // register:FieldsInterface[];
  // user:FieldsInterface[];
}
export type FormName = 'login' |
  'register' |
  'currencys' | 
  // 'setting' | 
  'users' | 
  'brands' | 
  'cars' | 
  'rentals' |
  // 'report' |
  'types' |
  'clients' |
  'documents' ;
interface Options{
  value:string;
  label:string;
}
// funciones para los formulario para crear o actualizar los datos 

export type FormTypes = 
  'login' |
  'register' |
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
export type UpdateForm = 
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
// funcion para poner la informacion en el formulario segun el id
export type FunctionsFormInterface = {
  [key in FormTypes]: FunctionForm;
}
export type FunctionsFormUpdateInterface = {
  [key in UpdateForm]: FunctionFormUpdate;
}
export type FunctionForm = (form: FormGroup<any>, service:ApiService,id:string,browser:BrowserService,url: string,navigate:string,router:Router, msjSuccess: string, msjError: string)=>void
export type FunctionFormUpdate= (form: FormGroup<any>, service:ApiService,id:string,browser:BrowserService,url: string,router:Router, msjSuccess: string, msjError: string)=>void

