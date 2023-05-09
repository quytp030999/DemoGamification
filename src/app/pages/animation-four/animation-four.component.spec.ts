import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationFourComponent } from './animation-four.component';

describe('AnimationFourComponent', () => {
  let component: AnimationFourComponent;
  let fixture: ComponentFixture<AnimationFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
