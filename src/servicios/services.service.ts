import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(public http: HttpClient) { }


  Obtenerdatos <T>(url:string){
    url='https://638e90624ddca317d7e15e51.mockapi.io/api/usuarios'
    return this.http.get<T[]>(url);

  }
   
}