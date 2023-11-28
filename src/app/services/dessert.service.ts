import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Dessert } from '../models/Dessert';
import { Observable, Subject } from 'rxjs';
import { ReporteDTO } from '../models/ReporteDTO';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class DessertService {
  private url = `${base_url}/api/desserts`;

  private listaCambio = new Subject<Dessert[]>();

  constructor(private http: HttpClient) { }

  list() {
    let token = sessionStorage.getItem('token');

    return this.http.get<Dessert[]>(this.url, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  insert(d: Dessert) {
    let token = sessionStorage.getItem('token');

    return this.http.post(this.url, d, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  setList(listaNueva: Dessert[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    let token = sessionStorage.getItem('token');

    return this.http.get<Dessert>(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  update(d: Dessert) {
    let token = sessionStorage.getItem('token');

    return this.http.put(this.url, d, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  delete(id: number) {
    let token = sessionStorage.getItem('token');

    return this.http.delete(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  getQuantityByDifficultDessert():Observable<ReporteDTO[]>{
    let token = sessionStorage.getItem('token');

    return this.http.get<ReporteDTO[]>(`${this.url}/report`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

}
