import { Injectable } from '@angular/core';
import { timingSafeEqual } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  usado: boolean;
  constructor() {
    this.usado = false;
  }

   get(key: string) {
    let data = JSON.parse(localStorage.getItem(key))
    if (!data) {
        data =  [];
    } else {
      this.usado = true;
    }
    return  data;
   }

   set(key: string, valor) {
     localStorage.setItem(key, JSON.stringify(valor));
   }

   remove(key: string) {
     localStorage.removeItem(key)
   }

}
