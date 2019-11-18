import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTareaRxComponent } from './new-tarea-rx.component';

describe('NewTareaRxComponent', () => {
  let component: NewTareaRxComponent;
  let fixture: ComponentFixture<NewTareaRxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTareaRxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTareaRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
