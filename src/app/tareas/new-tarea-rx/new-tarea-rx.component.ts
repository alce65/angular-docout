import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TareaModel } from 'src/app/models/tarea.model';
import { Observable } from 'rxjs';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'doc-new-tarea-rx',
  templateUrl: './new-tarea-rx.component.html',
  styleUrls: ['./new-tarea-rx.component.css']
})
export class NewTareaRxComponent implements OnInit {
  fcTarea: FormControl;
  aTareas: Array<TareaModel>;
  aTareas$: Observable<Array<TareaModel>>;

  constructor(private tareasService: TareasService) {}

  ngOnInit() {
    this.fcTarea = new FormControl();
    this.aTareas$ = this.tareasService.subcribe()
  }

  sendAddTarea() {
    if(!this.fcTarea.value) {
      return;
    }
    this.tareasService.addTarea(
      new TareaModel(this.fcTarea.value)
    )
  }

}
