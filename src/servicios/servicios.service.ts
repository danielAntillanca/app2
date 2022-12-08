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
        console.log('tabla ok');
      })
    }).catch(e=>{
      console.log('base datos ok');
    })
  }
almacenarusuario(correo,contrasena){
  this.sqlite.create({

    name:'datos.db',
    location:'default'

  }).then((db:SQLiteObject)=>  {
    db.executeSql('insert into usuarios values(?,?)', 
    [correo,contrasena]).then(()=> {
      console.log('usuario almacenado ok');
    }).catch(e=>{
      console.log('usuario no almacenado');
    })
  }).catch(e=>{
    console.log('base datos ok');
  })
}

validarcorreo(correo){
  return this.sqlite.create({

    name:'datos.db',
    location:'default'

  }).then((db:SQLiteObject)=>  {
    return db.executeSql('select count(mail)as cantidad from usuario where mail=?', 
    [correo]).then((data)=> {
      if(data.rows.item(0).cantidad === 0){
        return false;
      }
      return true;


    }).catch(e=>{
      return true;
    })
  }).catch(e=>{
    return true;
  });
}
  canActivate(){
    this.router.navigate(['login']);
    return false;
  }
}
