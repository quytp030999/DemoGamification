import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationThreeComponent } from './animation-three.component';

describe('AnimationThreeComponent', () => {
  let component: AnimationThreeComponent;
  let fixture: ComponentFixture<AnimationThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
