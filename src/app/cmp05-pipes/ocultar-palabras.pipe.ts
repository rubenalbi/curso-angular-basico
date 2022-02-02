import { Pipe, PipeTransform } from '@angular/core';
import { repeat } from 'rxjs';

@Pipe({
  name: 'ocultarPalabras'
})
export class OcultarPalabrasPipe implements PipeTransform {

  transform(value: string, palabras: Array<string>, sustituto: string = '*'): string {
    
    palabras.forEach(palabra => {
      const regExp = new RegExp(palabra, 'g');
      value = value.replace(regExp, sustituto.repeat(palabra.length));
    });
    
    return value;
  }

}
