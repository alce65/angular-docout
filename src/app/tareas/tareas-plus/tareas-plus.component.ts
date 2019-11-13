import { Component, OnInit } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'doc-tareas-plus',
  templateUrl: './tareas-plus.component.html',
  styleUrls: ['./tareas-plus.component.css']
})
export class TareasPlusComponent implements OnInit {
  tareas: Array<TareaModel>;
  storeName: string;

  constructor(private storageService: StorageService) {
    console.log(storageService.usado)
   }

  ngOnInit() {
    this.storeName = 'TareasPlus';
    this.tareas =  this.storageService.get(this.storeName);
  }

  addTarea(tarea: TareaModel) {
    this.tareas.push(tarea);
    this.actualizaStore();
    console.log(this.tareas);
  }

  changeTarea(i) {
    this.tareas[i].isCompleted = !this.tareas[i].isCompleted;
    this.actualizaStore();
  }

  deleteTarea(i) {
    this.tareas.splice(i, 1);
    this.actualizaStore();
  }

  resetTareas() {
    this.tareas = [];
    this.storageService.remove(this.storeName);
  }

  private actualizaStore() {
    this.storageService.set(this.storeName, this.tareas);
  }
}
