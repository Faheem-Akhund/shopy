import { TestBed } from '@angular/core/testing';

import { DiscardedService } from './discarded.service';

describe('DiscardedService', () => {
  let service: DiscardedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscardedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
