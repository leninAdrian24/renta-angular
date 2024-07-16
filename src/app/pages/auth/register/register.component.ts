import { Component } from '@angular/core';
import { MaterialModule } from '../../../core/material/material.module';
import { FormComponent } from '../../../shared/components/form/form.component';
import { FormName } from '../../../shared/utils/form/interfaces/form-interface';
@Component({
    selector: 'app-register',
    standalone: true,
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
    imports: [MaterialModule, FormComponent],
    
})
export class RegisterComponent {
  /**
   * ==formName==
   * Nombre del formulario 
   */
  formName:FormName='register';
  btnColor:string = 'btn-register';
  url:string = "auth/local/register";
  navigate:string = "/auth/login";
  messageSuccess:string = "User registered succesfully";
  messageError:string = "Error a register user";
}
