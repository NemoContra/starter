import { TestBed } from '@angular/core/testing';

import { FlugService } from './flug.service';

describe('FlugService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlugService = TestBed.get(FlugService);
    expect(service).toBeTruthy();
  });
});
