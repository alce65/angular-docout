import { Directive, OnInit, ElementRef, Input, HostListener } from '@angular/core';

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
    this.element.nativeElement.classList.add('destacar');
    this.element.nativeElement.innerHTML += ' ' + this.docDestacar.toUpperCase()
    console.log(this.docDestacar);
  }

  @HostListener('click', ['$event']) onClick(params) {
    console.log('Has hecho click');
    console.log(params);
    this.element.nativeElement.classList.toggle('destacar');
  }


}
