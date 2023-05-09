import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationEightComponent } from './animation-eight.component';

describe('AnimationEightComponent', () => {
  let component: AnimationEightComponent;
  let fixture: ComponentFixture<AnimationEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationEightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
