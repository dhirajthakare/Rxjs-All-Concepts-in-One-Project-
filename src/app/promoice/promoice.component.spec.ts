import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoiceComponent } from './promoice.component';

describe('PromoiceComponent', () => {
  let component: PromoiceComponent;
  let fixture: ComponentFixture<PromoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
