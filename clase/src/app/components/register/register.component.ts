import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private formBuilder: FormBuilder) { }

  // registroUsuario = new FormGroup({
  //   nombre: new FormControl(''),
  //   apellido: new FormControl(''),
  //   correoElectronico: new FormControl(''),
  //   contrasena: new FormControl('')
  // });

  registroUsuario = this.formBuilder.group({
    nombre: [''],
    apellido: [''],
    correoElectronico: ['', {
      validators: [
        Validators.pattern(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/),
        Validators.required
      ],
      updateOn: 'blur'
    }],
    contrasena: [''],
    preferencias: this.formBuilder.array([
      this.formBuilder.control('', Validators.required)
    ])
  })

  get correoElectronico(){
    return this.registroUsuario.get('correoElectronico');
  }

  get preferencias(){
    return this.registroUsuario.get('preferencias') as FormArray;
  }

  addPreferencia(){
    this.preferencias.push(this.formBuilder.control('', Validators.required));
  }


  registrar(){
    console.log(this.registroUsuario);
  }

}
