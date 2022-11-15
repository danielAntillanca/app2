import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(public http:HttpClient) { 
    console.log('hola clientes service');
  }
  Obtenerdatos(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
