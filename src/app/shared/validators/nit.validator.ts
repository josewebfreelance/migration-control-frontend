import {AbstractControl, ValidatorFn} from '@angular/forms';
import {isNullOrUndefined} from 'util';

export class NitValidator {

    static verifyNIT(canCF: boolean): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {

            let nit = !isNullOrUndefined(control) && !isNullOrUndefined(control.value) ? <string>control.value : null;
            if (isNullOrUndefined(nit)) {
                return {'nitNull': true};
            } else {

                /* Valida consumidor final*/

                // if (canCF && nit.toUpperCase() === 'CF') {
                //     return null;
                // }

                nit = NitValidator.nitPurification(nit);
                /* Valida tamaño */
                if (nit.length < 2) {
                    return {'longitudMinNit': true};
                }
                if (nit.length > 12) {
                    return {'longitudMaxNit': true};
                }
                /* Valida digito virificador */
                if (!NitValidator.validarNITMod11(nit)) {
                    return {'digitoVerificador': true};
                }
            }

            return null;
        };
    }

    private static nitPurification(nit: string): string {
        /* Elimina espacios en blanco */
        nit = nit.trim();

        /* Elimina guiones en la antepenultima posicion */
        if (nit.charAt(nit.length - 2) === '-') {
            nit = nit.substring(0, nit.length - 2) + nit.substring(nit.length - 1);
        }
        /* Convierte letra K a mayusculas */
        if (nit.charAt(nit.length - 1).toLowerCase() === 'k') {
            nit = nit.substring(0, nit.length - 1) + 'K';
        }
        return nit;
    }

    private static isNumeric(cadena: string): boolean {
        try {
            return !isNaN(Number.parseInt(cadena, 10));
        } catch (excepcion) {
            return false;
        }
    }

    static validarNITMod11(nit: string): boolean {
        const pos = nit.length - 1;
        const correlativo = nit.substring(0, pos);
        const digitoVerificador = nit.substring(pos, nit.length);

        let factor = correlativo.length + 1;
        let valor = 0;

        for (let i = 0; i < pos; i++) {
            valor += parseInt(correlativo[i], 10) * factor;
            factor -= 1;
        }
        let residuo = valor % 11;
        let resultado = 11 - residuo;

        if (resultado >= 11) {
            residuo = resultado % 11;
            resultado = residuo;
        }

        if (resultado === 10) {
            if (digitoVerificador.toUpperCase() === 'K') {
                return true;
            }

        } else if (digitoVerificador === resultado.toString()) {
            return true;
        }
        return false;
    }

    static isValid(nit: string, canCF: boolean): boolean {

        if (isNullOrUndefined(nit)) {
            return false;
        } else {

            /* Valida consumidor final*/
            if (canCF && nit.toUpperCase() === 'CF') {
                return true;
            }

            nit = NitValidator.nitPurification(nit);
            /* Valida tamaño */
            if (nit.length < 2) {
                return false;
            }
            if (nit.length > 12) {
                return false;
            }
            /* Valida digito virificador */
            if (!NitValidator.validarNITMod11(nit)) {
                return false;
            }
        }

        return true;
    }
}
