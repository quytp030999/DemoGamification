import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShakeGiftsInBoxComponent } from './shake-gifts-in-box.component';

describe('ShakeGiftsInBoxComponent', () => {
  let component: ShakeGiftsInBoxComponent;
  let fixture: ComponentFixture<ShakeGiftsInBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShakeGiftsInBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShakeGiftsInBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
