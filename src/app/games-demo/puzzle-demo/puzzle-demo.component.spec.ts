import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleDemoComponent } from './puzzle-demo.component';

describe('PuzzleDemoComponent', () => {
  let component: PuzzleDemoComponent;
  let fixture: ComponentFixture<PuzzleDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzzleDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuzzleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
