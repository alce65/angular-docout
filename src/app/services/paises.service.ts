import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(public http: HttpClient) { }

  getPaises(continentCode: string): Observable<Array<{name: string, alpha3Code: string}>> {
    const url = environment.urlPaises + continentCode + '?fields=name;alpha3Code;';
    return this.http.get(url) as Observable<Array<{name: string, alpha3Code: string}>>;
  }

  getPaisInfo(paisCode: string): Observable<Array<any>> {
    const url = environment.urlInfoPais + paisCode;
    return this.http.get(url) as Observable<Array<any>>;
  }
}


