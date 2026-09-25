import { rubricaAprobadoReprobado } from './task5.js'

export function rubricaExcelente(nota) {
    if (nota > 8) return "Excelente";
    return rubricaAprobadoReprobado(nota);
}