import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{

    private _personajes: Personaje []= [{
        nombre: 'Gohan',
        poder: 400
        },{
        nombre: 'No. 18',
        poder: 1000
        }
    ];

    get personajes():Personaje[]{
        return [...this._personajes];
    }

    constructor(){}

    agregarPersonaje (personaje: Personaje){
        this._personajes.push(personaje);
    }

}