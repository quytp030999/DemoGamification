import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShakeStickDemoComponent } from './shake-stick-demo.component';

describe('ShakeStickDemoComponent', () => {
  let component: ShakeStickDemoComponent;
  let fixture: ComponentFixture<ShakeStickDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShakeStickDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShakeStickDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
