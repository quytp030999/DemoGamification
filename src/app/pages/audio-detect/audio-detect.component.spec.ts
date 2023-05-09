import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioDetectComponent } from './audio-detect.component';

describe('AudioDetectComponent', () => {
  let component: AudioDetectComponent;
  let fixture: ComponentFixture<AudioDetectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioDetectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioDetectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
