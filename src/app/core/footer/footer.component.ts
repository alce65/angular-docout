import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doc-footer',
  templateUrl: './footer.component.html',
  styleUrls: [
    '../common.css',
    './footer.component.css'
  ]
})
export class FooterComponent implements OnInit {
  autor: string;
  fecha: Date;

  constructor() { }

  ngOnInit() {
    this.autor = 'Alejandro Cerezo';
    this.fecha = new Date();
  }

}
