import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtRequest } from '../models/jwtRequest';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private hryeHttp: HttpClient) { }

  login(hryeRequest: JwtRequest) {
    return this.hryeHttp.post("http://localhost:8080/authenticate", hryeRequest);
  }
  verificar() {
    let hryeToken = sessionStorage.getItem("token");
    return hryeToken != null;

  }
  showRole(){
    let hryeToken = sessionStorage.getItem("token");
    if (!hryeToken) {
      // Manejar el caso en el que el token es nulo.
      return null; // O cualquier otro valor predeterminado dependiendo del contexto.
    }
    const hryeHelper = new JwtHelperService();
    const hryeDecodedToken = hryeHelper.decodeToken(hryeToken);
    return hryeDecodedToken?.role;
  }
}
