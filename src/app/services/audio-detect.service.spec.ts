import { TestBed } from '@angular/core/testing';

import { AudioDetectService } from './audio-detect.service';

describe('AudioDetectService', () => {
  let service: AudioDetectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioDetectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
