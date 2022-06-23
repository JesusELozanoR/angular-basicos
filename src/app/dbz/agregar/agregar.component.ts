import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzModule } from '../dbz.module';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent  {

  @Input() nuevo: Personaje ={
    nombre:'',
    poder: 0
  }

  constructor (private dbzService: DbzService){};
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar( ):void {
    if (this.nuevo.nombre.length != 0){
      console.log(this.nuevo);
      //this.onNuevoPersonaje.emit(this.nuevo)
      this.dbzService.agregarPersonaje(this.nuevo);
      this.nuevo = {
        nombre:'',
        poder: 0
      };
    }else{
      console.log('Nombre no Valido: ' , this.nuevo.nombre.length);
      return;
    }
  }

}
