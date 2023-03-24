import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  URL = 'https://joana-coll.onrender.com/proyecto/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.URL + `detail/${id}`);
  }

  public save(proyecto: Proyecto): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', proyecto);
  }

  public update(id: number, proyecto: Proyecto): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, proyecto);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}