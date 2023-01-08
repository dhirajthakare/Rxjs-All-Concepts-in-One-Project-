import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookTestComponent } from './look-test.component';

describe('LookTestComponent', () => {
  let component: LookTestComponent;
  let fixture: ComponentFixture<LookTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LookTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LookTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
