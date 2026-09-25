import { rubricaExcelente } from './task6.js'

export function rubricaPerfecto(nota) {
    if (nota == 11) return "Perfecto";
    return rubricaExcelente(nota);
}