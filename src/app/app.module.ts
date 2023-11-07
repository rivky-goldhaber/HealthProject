import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { YearlyBreastfedInfantReportComponent } from './components/yearly-breastfed-infant-report/yearly-breastfed-infant-report.component';
import { InstitutionScoreDifferencReportComponent } from './components/institution-score-differenc-report/institution-score-differenc-report.component';
import { RouterModule, Routes } from '@angular/router';
import { MonthlyBreastfedInfantReportComponent } from './components/monthly-breastfed-infant-report/monthly-breastfed-infant-report.component';
import { HomePageComponent } from './components/home-page/home-page.component';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    YearlyBreastfedInfantReportComponent,
    InstitutionScoreDifferencReportComponent,
    MonthlyBreastfedInfantReportComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


