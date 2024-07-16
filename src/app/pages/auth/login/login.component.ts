import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../core/material/material.module';
import { FormComponent } from '../../../shared/components/form/form.component';
import { FormName } from '../../../shared/utils/form/interfaces/form-interface';
import { AutheticatedService } from '../../../core/services/autheticated.service';
import { Router, RouterModule } from '@angular/router';
@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [MaterialModule, FormComponent,RouterModule],
    
})
export class LoginComponent implements OnInit {
    /**
     * ==formName==
     * Nombre del formulario que pedire
     */
    formName: FormName = 'login';
    btnColor:string = 'btn-login';
    url:string="auth/local";
    navigate:string = '/dashboard';
    messageSuccess:string ="Log in SuccessFully"
    messageError:string ="Email or password invalid"
    constructor(private authenticated:AutheticatedService,private router:Router){
        // console.log(this.authenticated.isAutheticated())
        if(this.authenticated.isAutheticated()){
            this.router.navigate(['/dashboard']);
        }
    }
    ngOnInit(): void {
    }
}
