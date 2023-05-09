import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CratchCardDemoComponent } from './cratch-card-demo.component';

describe('CratchCardDemoComponent', () => {
  let component: CratchCardDemoComponent;
  let fixture: ComponentFixture<CratchCardDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CratchCardDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CratchCardDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
