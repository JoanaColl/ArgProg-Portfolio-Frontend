import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AcercaService {
  URL = 'https://joana-coll.onrender.com/acerca/';
  
  constructor(private httpClient: HttpClient) { }

}