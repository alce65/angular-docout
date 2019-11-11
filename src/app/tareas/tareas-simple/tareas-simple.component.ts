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
  storeName: string;
  constructor() { }

  ngOnInit() {
    this.storeName = 'tareasSimple';
    this.tareas = JSON.parse(localStorage.getItem(this.storeName)) || [];
    this.tarea = new TareaModel();
  }

  addTarea() {
    this.tareas.push(this.tarea);
    this.tarea = new TareaModel();
    this.setStore();
  }

  deleteTarea(i) {
    this.tareas.splice(i, 1);
    this.setStore();
  }

  changeTarea() {
    this.setStore();
  }

  private setStore() {
  localStorage.setItem(this.storeName,
    JSON.stringify(this.tareas));
  }
}
