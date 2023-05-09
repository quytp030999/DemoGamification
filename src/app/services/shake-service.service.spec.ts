import { TestBed } from '@angular/core/testing';

import { ShakeServiceService } from './shake-service.service';

describe('ShakeServiceService', () => {
  let service: ShakeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShakeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
