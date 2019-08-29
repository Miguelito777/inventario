import { TestBed } from '@angular/core/testing';

import { EstanteriasService } from './estanterias.service';

describe('EstanteriasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstanteriasService = TestBed.get(EstanteriasService);
    expect(service).toBeTruthy();
  });
});
