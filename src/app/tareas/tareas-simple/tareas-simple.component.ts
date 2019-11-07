import { Component, OnInit } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'doc-tareas-simple',
  templateUrl: './tareas-simple.component.html',
  styleUrls: ['./tareas-simple.component.css']
})
export class TareasSimpleComponent implements OnInit {
  tareas: Array<TareaModel>;
  tarea: TareaModel;
  constructor() { }

  ngOnInit() {
    this.tareas = [];
    this.tarea = new TareaModel();
  }

  addTarea() {
    this.tareas.push(this.tarea);
    this.tarea = new TareaModel();
    console.log(this.tareas)
  }

}
