import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[]=['Spiderman', 'Hulk', 'Goku', 'SalirMoon', 'Chapulin Colorado'];
  deletedheroe : string='';

  borrarHeroe():void{
    this.deletedheroe=  this.heroes.pop() || '';
  }
}
