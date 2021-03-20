import { TestBed } from '@angular/core/testing';

import { AdmiGuard } from './admi.guard';

describe('AdmiGuard', () => {
  let guard: AdmiGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdmiGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
