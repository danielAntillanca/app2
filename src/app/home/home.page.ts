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

  Obtenerdatos:any []=[];



  constructor(public services:ServicesService) { 
    this.services.Obtenerdatos<any[]>("").subscribe(data => {

      this.Obtenerdatos = data

    })


}
}