import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { read } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = environment.urlUsers;
   }

   read(n) {
     return this.http.get(this.url + n).toPromise();
   }
   readAll() {
    return this.http.get(this.url).toPromise();
   }

   create(data) {
     return this.http.post(this.url, data).toPromise();
   }

   update(n, data) {
    // return this.http.put()
    return this.http.patch(this.url + n, data).toPromise();
   }
   delete(n) {
    return this.http.delete(this.url + n).toPromise();
   }
}


