import { Component, OnInit } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';
import { Observable } from 'rxjs';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'doc-tareas-rx',
  templateUrl: './tareas-rx.component.html',
  styleUrls: ['./tareas-rx.component.css']
})
export class TareasRxComponent implements OnInit {

  tareas: Array<TareaModel>;
  // tareas$: Observable<Array<TareaModel>>;

  constructor(private tareasService: TareasService) { }

  ngOnInit() {
    this.tareas = [];
    this.tareasService.subcribeTarea()
    .subscribe( response => this.tareas = response)
  }

  changeTarea(i) {
    this.tareasService.channgeTarea(i);
  }

  deleteTarea(i) {
    this.tareasService.deleteTaarea(i);
  }


  resetTareas() {}
}
