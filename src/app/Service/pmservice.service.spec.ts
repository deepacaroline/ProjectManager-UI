import { TestBed } from '@angular/core/testing';

import { PMServiceService } from './pmservice.service';

describe('PMServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PMServiceService = TestBed.get(PMServiceService);
    expect(service).toBeTruthy();
  });
});
