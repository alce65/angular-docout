import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosServiceComponent } from './libros-service.component';

describe('LibrosServiceComponent', () => {
  let component: LibrosServiceComponent;
  let fixture: ComponentFixture<LibrosServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrosServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
