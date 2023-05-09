import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentPointsDemoComponent } from './different-points-demo.component';

describe('DifferentPointsDemoComponent', () => {
  let component: DifferentPointsDemoComponent;
  let fixture: ComponentFixture<DifferentPointsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifferentPointsDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DifferentPointsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
