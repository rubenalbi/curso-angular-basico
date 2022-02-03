import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-form',
  templateUrl: './error-form.component.html',
  styleUrls: ['./error-form.component.css']
})
export class ErrorFormComponent implements OnChanges {

  @Input() errores: any = null;
  listaErrores: Array<string> = [];

  constructor() { }

  ngOnChanges(): void {
    console.log(this.errores);
    this.listaErrores = [];
    for (let key in this.errores) {
      switch(key) {
        case 'required':
          this.listaErrores.push("El campo es obligatorio");
          break;
        case 'minlength':
          // const error = this.errores[key];
          const { actualLength, requiredLength} = this.errores[key];
          const msg = 'El campo tiene que tener ' + requiredLength + ' caracteres. Te faltan ' + (requiredLength - actualLength);
          // const msg = 'El campo tiene que tener ${requiredLength} caracteres. Te faltan ${requiredLength - actualLength}';
          this.listaErrores.push(msg);
          break;
        case 'esStark':
          this.listaErrores.push('Este usuario no es un stark.');
          break;
        case 'repetirPassword':
          this.listaErrores.push('El valor tiene que ser igual al del campo de la contraseña.');
          break;
        case 'passwordMasSegura':
          const { mayus, simbolo } = this.errores[key];
          if (mayus) {
            this.listaErrores.push('Tienes que añadir al menos una mayúscula.')
          }
          if (simbolo) {
            this.listaErrores.push('La contraseña tiene que tener uno de los siguientes símbolos: ')
          }
          break;

      }
    }
  }

}
