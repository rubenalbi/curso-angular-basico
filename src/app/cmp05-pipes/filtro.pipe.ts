import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  // pure: false SOLUCIÓN MALA, NO UTILIZAR
})
export class FiltroPipe implements PipeTransform {

  transform(value: Array<string>, txtFiltro: string): Array<string> {
    console.log('Pasa por el filtro');
    return value.filter(mascota => mascota.includes(txtFiltro));
  }

}
