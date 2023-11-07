import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as echarts from 'echarts';


@Component({
  selector: 'app-institution-score-differenc-report',
  templateUrl: './institution-score-differenc-report.component.html',
  styleUrls: ['./institution-score-differenc-report.component.css']
})
export class InstitutionScoreDifferencReportComponent {
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/api/experienceInstitutes/surveyPatientExperienceVariables/').subscribe((data: any) => {
      if (data) {
        const chart = echarts.init(document.getElementById('institution-score-differenc-report') as HTMLDivElement);
        const filteredData = data.filter((record: any) => record.comparisonGroup === 'גודל מוסד');
        const comparisonValue = ['קטנים', 'בינוניים - גדולים', 'מרכז על'];

        const subject = Array.from(new Set(filteredData.map((item: any) => item.subject))).sort();
        const comparisonValueGroup = Array.from(new Set(filteredData.map((item: any) => item.comparisonValue))).sort();

        const seriesData = comparisonValueGroup.map(comparison => {
        const comparisonData = filteredData.filter((item: any) => item.comparisonValue === comparison).sort((a: any, b: any) => a.subject.localeCompare(b.subject));
          return {
            name: comparison,
            type: 'bar',
            smooth: true,
            symbol: 'circle',
            data: comparisonData.map((data: any) => data.avgDiff)
          };
        });

        const options = {
          title: {
            text: 'הפרש ציון מהממוצע הארצי לפי מאפייני מוסד/אשפוז',
            right: '5%',
            top: '1%',
          },
          grid: {
            right: 40
          },
          tooltip: {
            trigger: 'axis'
          },

          legend: {
            top: '5%',
            right: '5%',
            data: comparisonValue,
          },
          xAxis: {
            type: 'category',
            data: subject.map(subject => subject),
          },
          yAxis: {
            name: 'הפרש מהממוצע הארצי',
            nameTextStyle: {
              rotate: 45
            },
            type: 'value',
            min: -5,
            max: 5,
            interval: 2.5,
            axisLabel: {
              formatter: '{value}%'
            },
          },
          color: ['#746AE2', '#74EAFC', '#91DCCF'],
          series: seriesData
        };

        chart.setOption(options);
      }
    });
  }
}
