import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TfPosenetComponent } from './tf-posenet.component';

describe('TfPosenetComponent', () => {
  let component: TfPosenetComponent;
  let fixture: ComponentFixture<TfPosenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TfPosenetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TfPosenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
