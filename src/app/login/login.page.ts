import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras,Route } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  modeloUsuario:string='';
  modeloContrasena:string='';

  constructor() { 
    console.log('login iniciado')
  }

  ngOnInit() {
  }

  validar(){
    console.log(this.modeloUsuario);
    console.log(this.modeloContrasena);
  }
}
