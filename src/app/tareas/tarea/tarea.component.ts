import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'doc-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  @Input() tarea: TareaModel;
  @Input() i: number;
  @Output() changeTarea: EventEmitter<number>;
  @Output() deleteTarea: EventEmitter<number>;

  constructor() {
    this.changeTarea = new EventEmitter();
    this.deleteTarea = new EventEmitter();
   }

  ngOnInit() {
    this.tarea = {...this.tarea};
  }

  sendChangeTarea() {
    this.changeTarea.next(this.i);
  }

  sendDeleteTarea() {
    this.deleteTarea.next(this.i);
  }
}
