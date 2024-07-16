import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MaterialModule } from '../../../core/material/material.module';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FieldsInterface, FormName, FormTypes } from '../../utils/form/interfaces/form-interface';
import { FormConfig } from '../../utils/form/config/form-config';
import { QuillModule } from 'ngx-quill'
import { ActivatedRoute, RouterModule } from '@angular/router';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MaterialModule,ReactiveFormsModule,QuillModule,RouterModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  providers: [provideNativeDateAdapter(),],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit {

  /**
   * ==formName== 
   * Nombre del controllers para la variable customForms
   * 
   * ==controlsForm==
   * variable que gaurdaralos controllers de la variable customForms
   * 
   * ==form==
   * Variable del formulario (FormGroup)
   * 
   * ==formBuilder==
   * Variable para asignar los controls o los campos al formulario
   * 
   * ==submit==
   * Variable para desplegar los erroes del formulario si se le da click aun botn 
   */
  @Input({required: true}) formName!: FormName;
  @Input({required: true}) url!: string;
  @Input({required: true}) navigate!: string;
  @Input({required: true}) btnColor!: string;
  @Input({required: true}) messageSuccess!: string;
  @Input({required: true}) messageError!: string;
  fieldsForm!:FieldsInterface[];
  form!:FormGroup;
  htmlContent:any;
  id!:string;
  mdoulesQuill = {
    toolbar: [
      ['bold', 'italic', 'underline','strike'],
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{'color': []}, {'background': []}],
    ]
  }
  // formConfig = inject(FormConfig);
  submit:boolean = false;
  nombreArchivo: string = 'No se ha seleccionado ningún archivo';
  hidePassword: boolean = true;
  constructor(private formConfig:FormConfig,private activatedRoute:ActivatedRoute) {}
  ngOnInit(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.form = this.formConfig.getControls(this.formName).formBuilder;
    this.fieldsForm = this.formConfig.getControls(this.formName).formFields;
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.form.patchValue({
      profile: file
    });
    this.nombreArchivo = file.name;// Aquí puedes manejar el archivo seleccionado, por ejemplo, subirlo a un servidor
  }
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
  onChangeEditor(event: any) {
    if(event.html){
      this.htmlContent = event.html;
    }
  }
  Form(){
    this.submit = true;
    this.formConfig.submitForm(this.formName,this.form,this.url,this.navigate,this.id,this.messageSuccess,this.messageError);
  }
}
