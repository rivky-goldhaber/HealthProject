import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionScoreDifferencReportComponent } from './institution-score-differenc-report.component';

describe('InstitutionScoreDifferencReportComponent', () => {
  let component: InstitutionScoreDifferencReportComponent;
  let fixture: ComponentFixture<InstitutionScoreDifferencReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstitutionScoreDifferencReportComponent]
    });
    fixture = TestBed.createComponent(InstitutionScoreDifferencReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
