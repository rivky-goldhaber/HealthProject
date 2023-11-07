
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-yearly-breastfed-infant-report',
  templateUrl: './yearly-breastfed-infant-report.component.html',
  styleUrls: ['./yearly-breastfed-infant-report.component.css']
})
export class YearlyBreastfedInfantReportComponent {
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get('/api/checkup/nursing').subscribe((data: any) => {
      if (data) {
        const chart = echarts.init(document.getElementById('yearly-breastfed-infant-report') as HTMLDivElement);
        const filteredData = data.filter((record: any) => record.year !== null && record.measure === 'הנקה מלאה');
        const years = Array.from(new Set(filteredData.map((item: any) => item.year))).sort();
        const ages = Array.from(new Set(filteredData.map((item: any) => item.age))).sort();
        const seriesData = ages.map(age => {
          const temp = filteredData.filter((item: any) => item.age === age);
          const ages = [1, 3, 6, 12];
          const ageData = temp.filter((item: any) => ages.includes(item.age));

          return {
            name: age,
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 6,
            data: ageData.map((data: any) => data.populationRate)
          };
        });

        const options = {
          title: {
            text: 'תינוקות יונקים - מגמה שנתית לפי גיל',
            right: '5%',
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
            data: ['12', '6', '3', '1'],
          },
          xAxis: {
            type: 'category',
            data: years.map(year => year)
          },
          yAxis: {
            type: 'value',
            min: 0,
            max: 75,
            interval: 15,
            axisLabel: {
              formatter: '{value}%'
            },
          },
          series: seriesData.map((data, index) => {
            return {
              ...data,
              itemStyle: {
                color: ['#746AE2', '#74BFFC', '#74EAFC', '#74FCEA'][index]
              }
            };
          })
        };

        chart.setOption(options);
      }
    });
  }
}