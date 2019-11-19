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

  subcribeTarea() {
    return this.tareas$.asObservable();
  }

  addTarea(tarea: TareaModel) {
    this.tareas.push(tarea);
    this.tareas$.next(this.tareas);
  }

  channgeTarea(i: number) {
    this.tareas[i].isCompleted = !this.tareas[i].isCompleted;
    this.tareas$.next(this.tareas);
  }

  deleteTaarea(i: number) {
    this.tareas.splice(i, 1);
    this.tareas$.next(this.tareas);
  }
}
