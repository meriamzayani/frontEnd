import { TestBed } from '@angular/core/testing';

import { FuckService } from './fuck.service';

describe('FuckService', () => {
  let service: FuckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
