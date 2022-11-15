import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SQLite,SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private router:Router,private sqlite:SQLite) {
    this.sqlite.create({

      name:'datos.db',
      location:'default'
  
    }).then((db:SQLiteObject)=>  {
      db.executeSql('create table if not exists usuario (mail varchar(75)contrasena varchar(30))', 
      []).then(()=> {
        console.log('tabla creada');
      }).catch(e=>{
        console.log('tabla ok')
      })
    }).catch(e=>{
      console.log('base datos ok')
    })
  }
}
