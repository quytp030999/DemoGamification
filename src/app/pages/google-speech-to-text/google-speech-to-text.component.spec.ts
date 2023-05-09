import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleSpeechToTextComponent } from './google-speech-to-text.component';

describe('GoogleSpeechToTextComponent', () => {
  let component: GoogleSpeechToTextComponent;
  let fixture: ComponentFixture<GoogleSpeechToTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleSpeechToTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleSpeechToTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
