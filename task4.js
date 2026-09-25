import { calculadoraEdad } from './task3.js'

export class EdadAmigo {
  constructor(name, year, month, day) {
    this.name = name;
    this.year = year;
    this.month = month;
    this.day = day;
  }
  
  calcularEdad() {
    return calculadoraEdad(this.year, this.month, this.day);
  }

  retornarEdad() {
    const age = this.calcularEdad();
    return `¡${this.name} tiene ${age} años hoy!`
  }

}