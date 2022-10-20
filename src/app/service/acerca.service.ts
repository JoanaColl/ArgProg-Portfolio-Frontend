import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AcercaService {
  URL = environment.URL + 'acerca/';
  
  constructor(private httpClient: HttpClient) { }

}