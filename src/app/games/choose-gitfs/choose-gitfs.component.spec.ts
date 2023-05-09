import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseGitfsComponent } from './choose-gitfs.component';

describe('ChooseGitfsComponent', () => {
  let component: ChooseGitfsComponent;
  let fixture: ComponentFixture<ChooseGitfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseGitfsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseGitfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
