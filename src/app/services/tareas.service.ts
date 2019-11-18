import { Injectable } from '@angular/core';
import { TareaModel } from '../models/tarea.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  tareas: Array<TareaModel>;
  tareas$: Subject<Array<TareaModel>>;

  constructor() {
    this.tareas  = [];
    // this.tareas$ = new Subject<Array<TareaModel>>();
    this.tareas$ = new Subject();
   }

  subcribe() {
    return this.tareas$.asObservable();
  }

  addTarea(tarea: TareaModel) {
    this.tareas.push(tarea);
    console.log(this.tareas);
    this.tareas$.next(this.tareas);
  }
}
