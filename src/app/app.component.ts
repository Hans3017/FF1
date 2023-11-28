import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fe_examen_final_202113835';
  hryeRole:string="";

  constructor(private hryeLoginService: LoginService) {
  }

  cerrar() {
    sessionStorage.clear();
  }

  verificar() {
    this.hryeRole=this.hryeLoginService.showRole();
    return this.hryeLoginService.verificar();
  }
  validarRol(){
    if(this.hryeRole=='ADMIN' || this.hryeRole=='USER'){
      return true;
    }else{
      return false;
    }
  }
}
