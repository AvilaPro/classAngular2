import { Component } from '@angular/core';
import { LoginUser } from "../../interfaces/login-user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // correo: string = '';
  algo: string = '';
  usuarioLogueado : LoginUser = {
    email: '',
    password: ''
  }

  revisarDatos(){
    console.log(this.usuarioLogueado);
  }

  verInfo(parameter: string, p: any, f?: any){
    console.log(parameter + ': ');
    console.log(p);
    console.log(f);
  }
}
