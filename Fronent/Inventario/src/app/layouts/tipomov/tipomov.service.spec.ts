import { TestBed } from '@angular/core/testing';

import { TipomovService } from './tipomov.service';

describe('TipomovService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipomovService = TestBed.get(TipomovService);
    expect(service).toBeTruthy();
  });
});
