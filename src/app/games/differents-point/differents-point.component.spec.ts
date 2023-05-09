import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentsPointComponent } from './differents-point.component';

describe('DifferentsPointComponent', () => {
  let component: DifferentsPointComponent;
  let fixture: ComponentFixture<DifferentsPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifferentsPointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DifferentsPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
