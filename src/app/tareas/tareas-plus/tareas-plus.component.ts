import { Component, OnInit } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'doc-tareas-plus',
  templateUrl: './tareas-plus.component.html',
  styleUrls: ['./tareas-plus.component.css']
})
export class TareasPlusComponent implements OnInit {
  tareas: Array<TareaModel>;
  constructor() { }

  ngOnInit() {
    this.tareas = []
  }

  addTarea(tarea: TareaModel) {
    this.tareas.push(tarea);
    console.log(this.tareas)
  }

  changeTarea(i) {
    this.tareas[i].isCompleted = !this.tareas[i].isCompleted;
  }

  deleteTarea(i) {
    this.tareas.splice(i, 1);

  }
}
