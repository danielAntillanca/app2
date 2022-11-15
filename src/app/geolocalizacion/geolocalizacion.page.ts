import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation';

@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.page.html',
  styleUrls: ['./geolocalizacion.page.scss'],
})
export class GeolocalizacionPage{

  latitud:number;
  longitud:number;

  constructor() { }

 async  obtenercoordenadas() {
  const obtenercoordenadas=await Geolocation.getCurrentPosition();
  this.latitud=obtenercoordenadas.coords.latitude;
  this.longitud=obtenercoordenadas.coords.longitude;
  }

}
