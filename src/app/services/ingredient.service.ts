import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ingredient } from '../models/Ingredient';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private url = `${base_url}/api/ingredients`;

  private listaCambio = new Subject<Ingredient[]>();

  constructor(private http: HttpClient) { }
  insert(i: Ingredient) {
    let token = sessionStorage.getItem('token');

    return this.http.post(this.url, i, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
}
