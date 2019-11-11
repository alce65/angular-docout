import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'doc-new-tarea',
  templateUrl: './new-tarea.component.html',
  styleUrls: ['./new-tarea.component.css']
})
export class NewTareaComponent implements OnInit {
  newTarea: TareaModel;
  @Output() addTarea: EventEmitter<TareaModel>;
  // @Output() addTarea2 =  new EventEmitter();

  constructor() {
    this.addTarea = new EventEmitter();
   }

  ngOnInit() {
    this.newTarea = new TareaModel();
  }
  sendAddTarea() {
    this.addTarea.next(this.newTarea);
    this.newTarea = new TareaModel();
  }
}
