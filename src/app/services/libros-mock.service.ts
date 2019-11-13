import { Injectable } from '@angular/core';
import { LibroModel } from '../models/libro.model';
import { LIBROS } from '../models/libros.data';

@Injectable({
  providedIn: 'root'
})
export class LibrosMockService {
  private libros: Array<LibroModel>;
  constructor() {
    this.libros = [];
  }

  getLibros(clave: string) {
    if (clave) {
      // Buscar
      this.libros = LIBROS;
      return this.libros;
    }
    return [];
  }

  getLibrosAsinc(clave: string): Promise<Array<LibroModel>> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const n = Math.random();
        if (n < 0.5) {
          this.libros = LIBROS;
          resolve(this.libros);
        } else {
          reject(new Error('Error num. ' + n));
        }
      }, 2000);
    });
  }
}
