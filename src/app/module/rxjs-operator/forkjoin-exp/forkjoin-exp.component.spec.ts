import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkjoinExpComponent } from './forkjoin-exp.component';

describe('ForkjoinExpComponent', () => {
  let component: ForkjoinExpComponent;
  let fixture: ComponentFixture<ForkjoinExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForkjoinExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForkjoinExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
