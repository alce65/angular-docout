import { TestBed } from '@angular/core/testing';

import { LibrosMockService } from './libros-mock.service';

describe('LibrosMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibrosMockService = TestBed.get(LibrosMockService);
    expect(service).toBeTruthy();
  });
});
