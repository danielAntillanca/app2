import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { error } from 'protractor';
import { ServicesService } from 'src/servicios/services.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuarios
  constructor(public navCtlr:NavController,public service:ServicesService) {}
  
  ionViewDidLoad(){
    this.service.Obtenerdatos()
    .subscribe(
    (data)=>{this.usuarios=data;},
    (error)=>{console.log(error);}
    )

  }

}
