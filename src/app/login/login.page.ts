import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras,Route } from '@angular/router'
import { AlertController, ToastController } from '@ionic/angular';
import { type } from 'os';
import { ServiciosService } from 'src/servicios/servicios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
}) 
export class LoginPage implements OnInit {
  modeloUsuario:string='';
  modeloContrasena:string='';

  constructor(private servicio:ServiciosService,private alertController:AlertController,private toastController:ToastController) { 
    console.log('login iniciado')
  }

  ngOnInit() {
  }

  validar(){
    console.log(this.modeloUsuario);
    console.log(this.modeloContrasena);
  }
  async mostrarformulario(){
    const alert = await this.alertController.create({
      header:'registrar',
      inputs: [
    {
     name:'correo',
     type :'text',
     placeholder:'Correo electronico'
    },
    {
      name:'contraseña',
      type :'password',
      placeholder:'contraseña'
    },
    ],
     buttons: [
      {
        text: 'cancelar',
        role:'cancel',
        cssClass:'secondary',
        handler:()=>{
        console.log('confirm cancel');
       }
      },{
       text:'almacenar',
       handler:(data)=> { 
        this.almacenarusuario(data.correo,data.contrasena);
       }
      }
    ]
});
   await alert.present();
}

 almacenarusuario(correo,contrasena){
  this.servicio.validarcorreo(correo).then((data)=> {
    if(!data){
      console.log('registrado correctamente ');
      this.servicio.almacenarusuario(correo,contrasena);
    }else {
      this.presentToast();
    }
  })
 }
 async presentToast(){
  const toast= await this.toastController.create({
    message:'este usuario ya esta registrado',
    duration:2000
  });
  toast.present();
 }
}
