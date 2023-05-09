import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseGiftsDemoComponent } from './choose-gifts-demo.component';

describe('ChooseGiftsDemoComponent', () => {
  let component: ChooseGiftsDemoComponent;
  let fixture: ComponentFixture<ChooseGiftsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseGiftsDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseGiftsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
