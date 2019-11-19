import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'doc-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
  @Input() titulo: string;
  @Input() autor: string;
  constructor() { }

  ngOnInit() {
  }

}
