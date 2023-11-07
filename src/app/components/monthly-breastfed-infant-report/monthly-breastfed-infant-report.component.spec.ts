import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyBreastfedInfantReportComponent } from './monthly-breastfed-infant-report.component';

describe('MonthlyBreastfedInfantReportComponent', () => {
  let component: MonthlyBreastfedInfantReportComponent;
  let fixture: ComponentFixture<MonthlyBreastfedInfantReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthlyBreastfedInfantReportComponent]
    });
    fixture = TestBed.createComponent(MonthlyBreastfedInfantReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
