import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LibroModel } from 'src/app/models/libro.model';
import { LibrosApiService } from 'src/app/services/libros-api.service';

@Component({
  selector: 'doc-libros-service',
  templateUrl: './libros-service.component.html',
  styleUrls: ['./libros-service.component.css']
})
export class LibrosServiceComponent implements OnInit {
  clave: FormControl;
  libros: Array<LibroModel>;
  constructor(private librosApiService: LibrosApiService) { }

  ngOnInit() {
    this.clave = new FormControl();
    this.libros = [];
  }

  buscar() {
    if(!this.clave) {
      return;
    }
    this.librosApiService.getLibros(this.clave)
    .then( (response: Array<LibroModel>) => {
      this.libros = response;
    });
  }

  buscarRx() {
    if(!this.clave) {
      return;
    }
    this.librosApiService.getLibrosRx(this.clave)
    .subscribe((response: Array<LibroModel>) => {
      this.libros = response;
    }

    )
  }

  borrar() {
    this.libros = []
  }

}
