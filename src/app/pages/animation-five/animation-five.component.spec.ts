import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationFiveComponent } from './animation-five.component';

describe('AnimationFiveComponent', () => {
  let component: AnimationFiveComponent;
  let fixture: ComponentFixture<AnimationFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
