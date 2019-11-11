import { Component, OnInit } from '@angular/core';
import { MaestrosIf } from 'src/app/models/alumno.model';
import { CURSOS } from 'src/app/models/cursos.data';

@Component({
  selector: 'doc-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTdComponent implements OnInit {
  cursos: Array<MaestrosIf>;
  constructor() { }

  ngOnInit() {
    this.cursos = CURSOS;
  }

}
