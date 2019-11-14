import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LibroModel } from '../models/libro.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LibrosApiService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = environment.urlLibros;
  }

  getLibros(clave): Promise<Array<LibroModel>> {
    // TODO
    return this.http.get(this.url + clave).toPromise()
    .then((response: any) => {
      clave.setValue('');
      console.log(response.items);
      if (response.items) {
        return response.items.map(
          (item) => {
                return { autores: item.volumeInfo.authors ,
                  titulo: item.volumeInfo.title };
                  });
       }
      }); // Fin del then
  } // Fin del getLibros

  // 
  getLibrosRx(clave): Observable<Array<LibroModel>> {
    return this.http.get(this.url + clave).pipe(
      map((response: any) => {
        if (response.items) {
          return response.items.map(
        (item) => {
          return {autores: item.volumeInfo.authors ,
                  titulo: item.volumeInfo.title };
            }
          );
        }
        } )
    );
  }
}// Fin de la clase
