import { Component, OnInit } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'doc-tareas-rx',
  templateUrl: './tareas-rx.component.html',
  styleUrls: ['./tareas-rx.component.css']
})
export class TareasRxComponent implements OnInit {

  tareas: Array<TareaModel>;
  constructor() { }

  ngOnInit() {
    this.tareas = [];
  }

  resetTareas() {}
}
