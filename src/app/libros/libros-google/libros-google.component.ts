import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'doc-libros-google',
  templateUrl: './libros-google.component.html',
  styleUrls: ['./libros-google.component.css']
})
export class LibrosGoogleComponent implements OnInit {
  url: string;
  constructor() { }

  ngOnInit() {
    this.url = environment.urlLibros;
  }

}
