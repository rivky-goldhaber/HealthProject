import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlyBreastfedInfantReportComponent } from './yearly-breastfed-infant-report.component';

describe('YearlyBreastfedInfantReportComponent', () => {
  let component: YearlyBreastfedInfantReportComponent;
  let fixture: ComponentFixture<YearlyBreastfedInfantReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YearlyBreastfedInfantReportComponent]
    });
    fixture = TestBed.createComponent(YearlyBreastfedInfantReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
