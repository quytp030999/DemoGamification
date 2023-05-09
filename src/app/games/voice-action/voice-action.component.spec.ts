import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceActionComponent } from './voice-action.component';

describe('VoiceActionComponent', () => {
  let component: VoiceActionComponent;
  let fixture: ComponentFixture<VoiceActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoiceActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoiceActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
