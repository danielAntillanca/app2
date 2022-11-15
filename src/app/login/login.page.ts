import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras,Route } from '@angular/router'
import { ServiciosService } from 'src/servicios/servicios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  modeloUsuario:string='';
  modeloContrasena:string='';

  constructor(private servicio:ServiciosService) { 
    console.log('login iniciado')
  }

  ngOnInit() {
  }

  validar(){
    console.log(this.modeloUsuario);
    console.log(this.modeloContrasena);
  }
}
