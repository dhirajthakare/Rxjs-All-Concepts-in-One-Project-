import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookCycleComponent } from './look-cycle.component';

describe('LookCycleComponent', () => {
  let component: LookCycleComponent;
  let fixture: ComponentFixture<LookCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LookCycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LookCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
