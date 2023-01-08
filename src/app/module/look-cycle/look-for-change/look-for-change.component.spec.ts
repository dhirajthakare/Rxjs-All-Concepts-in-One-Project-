import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookForChangeComponent } from './look-for-change.component';

describe('LookForChangeComponent', () => {
  let component: LookForChangeComponent;
  let fixture: ComponentFixture<LookForChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LookForChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LookForChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
