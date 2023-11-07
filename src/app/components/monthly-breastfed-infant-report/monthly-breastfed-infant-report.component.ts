import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as echarts from 'echarts';

@Component({
  selector: 'app-monthly-breastfed-infant-report',
  templateUrl: './monthly-breastfed-infant-report.component.html',
  styleUrls: ['./monthly-breastfed-infant-report.component.css']
})
export class MonthlyBreastfedInfantReportComponent implements OnInit {
  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.http.get('/api/checkup/nursing').subscribe((data: any) => {
      if (data) {
        const chart = echarts.init(document.getElementById('monthly-breastfed-infant-report') as HTMLDivElement);
        const filteredData = data.filter((record: any) => record.year === null && record.measure != 'הנקה מלאה + משולבת');

        const fullBreastfeedingData = filteredData.filter((data: any) => data.measure === "הנקה מלאה").map((data: any) => data.populationRate);
        const combinedBreastfeedingData = filteredData.filter((data: any) => data.measure === "הנקה משולבת").map((data: any) => data.populationRate);
        const noBreastfeedingData = filteredData.filter((data: any) => data.measure === "ללא הנקה").map((data: any) => data.populationRate);
        const option = {
          title: {
            text: 'תינוקות יונקים - אחוז הנקה לפי גיל',
            right: '5%',
          },
          grid: {
            right: 40
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
            },
          },
          legend: {
            top: '5%',
            right: '5%',
            data: ['הנקה מלאה', 'הנקה משולבת', 'ללא הנקה'],
          },
          xAxis: {
            type: 'category',
            data: Array.from({ length: 12 }, (_, i) => (i + 1) + ' חודשים')
          },
          yAxis: {
            type: 'value',
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
              formatter: '{value}%'
            }
          },
          series: [
            {
              name: 'הנקה מלאה',
              type: 'line',
              stack: 'total',
              areaStyle: {},
              itemStyle: {
                color: '#74BFFC'
              },
              data: fullBreastfeedingData,
            },
            {
              name: 'הנקה משולבת',
              type: 'line',
              stack: 'total',
              areaStyle: {},
              itemStyle: {
                color: '#74FCEA'
              },
              data: combinedBreastfeedingData,
            },
            {
              name: 'ללא הנקה',
              type: 'line',
              stack: 'total',
              areaStyle: {},
              itemStyle: {
                color: '#91DCCF'
              },
              data: noBreastfeedingData,
            },
          ],
        };

        chart.setOption(option);
      }
    });
  }
}