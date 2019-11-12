import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[docDestacar]'
})
export class DestacarDirective implements OnInit {

  @Input() docDestacar: string;
  constructor(public element: ElementRef) { 

  }

  ngOnInit() {
    console.log('Directiva aplicada');
    console.dir(this.element);
    console.log(this.docDestacar);
  }
}
