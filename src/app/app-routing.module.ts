import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YearlyBreastfedInfantReportComponent } from './components/yearly-breastfed-infant-report/yearly-breastfed-infant-report.component';
import { MonthlyBreastfedInfantReportComponent } from './components/monthly-breastfed-infant-report/monthly-breastfed-infant-report.component';
import { InstitutionScoreDifferencReportComponent } from './components/institution-score-differenc-report/institution-score-differenc-report.component';
import { HomePageComponent } from './components/home-page/home-page.component';


const routes: Routes = [
  { path: 'yearly-breastfed-infant-report', component: YearlyBreastfedInfantReportComponent },
  { path: 'monthly-breastfed-infant-report', component: MonthlyBreastfedInfantReportComponent },
  { path: 'institution-score-differenc-report', component: InstitutionScoreDifferencReportComponent },
  { path: '', component: HomePageComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
