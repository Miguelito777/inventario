import { TestBed } from '@angular/core/testing';

import { PasillosService } from './pasillos.service';

describe('PasillosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PasillosService = TestBed.get(PasillosService);
    expect(service).toBeTruthy();
  });
});
