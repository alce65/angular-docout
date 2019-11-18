import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = environment.urlUsers;
   }

   read(n): Promise<UserModel> {
     return this.http.get(this.url + n).toPromise() as Promise<UserModel>;
   }

   readAll(): Promise<Array<UserModel>> {
    return this.http.get(this.url).toPromise() as Promise<Array<UserModel>>;
   }

   create(data: UserModel): Promise<UserModel> {
     return this.http.post(this.url, data).toPromise() as Promise<UserModel>;
   }

   update(n: number, data: UserModel): Promise<UserModel>  {
    // return this.http.put()
    return this.http.patch(this.url + n, data).toPromise() as Promise<UserModel>;
   }

   delete(n: number) {
    return this.http.delete(this.url + n).toPromise();
   }
}


