import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShakeDemoComponent } from './shake-demo.component';

describe('ShakeDemoComponent', () => {
  let component: ShakeDemoComponent;
  let fixture: ComponentFixture<ShakeDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShakeDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShakeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
