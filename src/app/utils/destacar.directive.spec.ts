import { Component, DebugElement} from '@angular/core';
import { DestacarDirective } from './destacar.directive';
// import { ComponentFixture } from '@angular/core/testing'

describe('DestacarDirective', () => {

  /* let component: Component;
  let fixture: ComponentFixture<Component>; */
  let elem: DebugElement;

  it('should create an instance', () => {
    const directive = new DestacarDirective( elem);
    expect(directive).toBeTruthy();
  });
});
