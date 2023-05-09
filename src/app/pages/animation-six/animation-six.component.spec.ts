import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationSixComponent } from './animation-six.component';

describe('AnimationSixComponent', () => {
  let component: AnimationSixComponent;
  let fixture: ComponentFixture<AnimationSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
