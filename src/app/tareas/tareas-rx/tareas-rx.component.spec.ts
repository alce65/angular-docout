import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasRxComponent } from './tareas-rx.component';

describe('TareasRxComponent', () => {
  let component: TareasRxComponent;
  let fixture: ComponentFixture<TareasRxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareasRxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
