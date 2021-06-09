import {AbstractControl, ValidatorFn} from '@angular/forms';
import {isNullOrUndefined} from 'util';

export class AppValidators {

  static varchar(control: AbstractControl): any {
    if (!isNullOrUndefined(control.value) && control.value.toString().trim().length === 0) {
      return {'isBlank': true};
    }
    return null;
  }

  static number(control: AbstractControl): any {
    if (!isNullOrUndefined(control.value)) {
      const numValue = parseFloat(control.value.toString().replace(/,/g, ''));
      if (isNaN(numValue)) {
        return {'isNotNumber': true};
      }
      return null;
    }
  }

  static rango(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {

      let numValue = 0;
      if (!isNullOrUndefined(control.value)) {
        numValue = parseFloat(control.value.toString().replace(/,/g, ''));
        if (isNaN(numValue)) {
          numValue = 0;
        }
      }

      const isValid = !isNaN(numValue) && numValue >= min && numValue <= max;
      return isValid ? null : {'rango': true};
    };
  }

  static max(max: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {

      let numValue = 0;
      if (!isNullOrUndefined(control.value)) {
        numValue = parseFloat(control.value.toString().replace(/,/g, ''));
        if (isNaN(numValue)) {
          numValue = 0;
        }
      }

      const isValid = numValue <= max;
      return isValid ? null : {'max': true};
    };
  }

  static min(min: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {

      let numValue = 0;
      if (!isNullOrUndefined(control.value)) {
        numValue = parseFloat(control.value.toString().replace(/,/g, ''));
        if (isNaN(numValue)) {
          numValue = 0;
        }
      }

      const isValid = numValue >= min;
      return isValid ? null : {'min': true};
    };
  }

  static objectHasId(control: AbstractControl): any {
    if (isNullOrUndefined(control.value) || isNullOrUndefined(control.value.id)) {
      return {'needId': true};
    }
    return null;
  }

  static objectHasNit(control: AbstractControl): any {
    if (isNullOrUndefined(control.value) || isNullOrUndefined(control.value.nit)) {
      return {'needId': true};
    }
    return null;
  }

  static optionalWithMin(min: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {

      let numValue = 0;
      if (!isNullOrUndefined(control.value)) {
        numValue = parseFloat(control.value.toString().replace(/,/g, ''));
        if (isNaN(numValue)) {
          numValue = 0;
        }
      }

      const isValid = numValue === 0 || numValue >= min;
      return isValid ? null : {'min': -true};
    };
  }

  static optionalWithRango(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {

      let numValue = 0;
      if (!isNullOrUndefined(control.value)) {
        numValue = parseFloat(control.value.toString().replace(/,/g, ''));
        if (isNaN(numValue)) {
          numValue = 0;
        }
      }

      const isValid = numValue === 0 || !isNaN(numValue) && numValue >= min && numValue <= max;
      return isValid ? null : {'rango': true};
    };
  }
}


