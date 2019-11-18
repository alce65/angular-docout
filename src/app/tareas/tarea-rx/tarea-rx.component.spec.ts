import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaRxComponent } from './tarea-rx.component';

describe('TareaRxComponent', () => {
  let component: TareaRxComponent;
  let fixture: ComponentFixture<TareaRxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaRxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
