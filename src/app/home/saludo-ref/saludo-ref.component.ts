import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'doc-saludo-ref',
  templateUrl: './saludo-ref.component.html',
  styleUrls: ['./saludo-ref.component.css']
})
export class SaludoRefComponent implements OnInit {

  @ViewChild('refNombre', {static:true}) nodoNombre: ElementRef;
  constructor() { }

  ngOnInit() {
    // HTML
    console.log(this.nodoNombre.nativeElement)
    // Objeto DOM de JS
    console.dir(this.nodoNombre.nativeElement)
  }

}
