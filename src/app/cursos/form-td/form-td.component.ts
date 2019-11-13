import { Component, OnInit, ViewChild } from '@angular/core';
import { MaestrosIf, AlumnoModel } from 'src/app/models/alumno.model';
import { CURSOS, TURNOS } from 'src/app/models/cursos.data';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'doc-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css'],
})
export class FormTdComponent implements OnInit {
  cursos: Array<MaestrosIf>;
  turnos: Array<MaestrosIf>;
  alumno: AlumnoModel;
  @ViewChild('form_td', {static: true}) form: NgForm;

  constructor() { }

  ngOnInit() {
    this.cursos = CURSOS;
    this.turnos = TURNOS;
    this.alumno = new AlumnoModel();
    console.log(this.form);
  }

  onSubmit() {
    console.log('Enviado')
  }
}
