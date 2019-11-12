import { Component, OnInit } from '@angular/core';
import { MaestrosIf, AlumnoModel } from 'src/app/models/alumno.model';
import { CURSOS, TURNOS } from 'src/app/models/cursos.data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'doc-form-md',
  templateUrl: './form-md.component.html',
  styleUrls: ['./form-md.component.css']
})
export class FormMdComponent implements OnInit {
  cursos: Array<MaestrosIf>;
  turnos: Array<MaestrosIf>;
  formCurso: FormGroup;
  alumno: AlumnoModel;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.cursos = CURSOS;
    this.turnos = TURNOS;
    this.formCurso = this.formBuilder.group(
      {
        nombre: ['', [Validators.required, Validators.minLength(2)]],
        apellidos: ['', []],
        paswd: ['', []],
        email: ['', []],
        nacim: ['', []],
        coment: ['', []],
        isOk: ['', []],
        turno : [null, []],
        curso: [null, []]
      });

    console.log(this.formCurso);
    }

    onSubmit() {
      this.alumno = this.formCurso.value;
      console.log(this.alumno);
    }
}
