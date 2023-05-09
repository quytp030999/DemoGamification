import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationSevenComponent } from './animation-seven.component';

describe('AnimationSevenComponent', () => {
  let component: AnimationSevenComponent;
  let fixture: ComponentFixture<AnimationSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationSevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
