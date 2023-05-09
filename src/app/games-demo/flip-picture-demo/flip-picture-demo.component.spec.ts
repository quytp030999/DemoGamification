import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipPictureDemoComponent } from './flip-picture-demo.component';

describe('FlipPictureDemoComponent', () => {
  let component: FlipPictureDemoComponent;
  let fixture: ComponentFixture<FlipPictureDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipPictureDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipPictureDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
