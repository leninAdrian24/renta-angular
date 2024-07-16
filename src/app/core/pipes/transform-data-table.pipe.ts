import { Pipe, PipeTransform } from '@angular/core';
import * as marked from 'marked';
@Pipe({
  name: 'transformDataTable',
  standalone: true
})
export class TransformDataTablePipe implements PipeTransform {
  private typeValue:any = {
    symbol:(value:string)=>{
      return value.toUpperCase();
    },
    date:(value:string)=>{
      return new Date(value).toLocaleDateString('es-ES');
    },
    address:(value:string)=>{
      return marked.parseInline(value.toString());
    },
    plate:(value:string)=>{
      return value.toString().toUpperCase();
    },
    model:(value:string)=>{
      return value.toString().toUpperCase();
    }
  } 
  private text(value: string){
    const text = value.toString().split(' ');
    return text.map(text=>text.charAt(0).toUpperCase() + text.slice(1)).join(' ');
  }
  transform(value: string, field:string): string {
    if (!value) return '';
    if(field){
      if(this.typeValue[field]){
        return this.typeValue[field](value); 
      }else{
        return this.text(value);
      }
    }else{
      return '';
    }
  }
}