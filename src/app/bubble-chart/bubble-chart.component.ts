import { formatCurrency } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js';
import 'chartjs-plugin-style';
import * as moment from 'moment';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.css'],
})
export class BubbleChartComponent implements OnInit {
  @Input() data = [];
  @Input() toolTipTitle: string;
  @Input() xAxisPropName: string;
  @Input() yAxisPropName: string;

  constructor() {}

  preparedData() {
    return this.data.map((item) => {
      return {
        title: item[this.toolTipTitle],
        x: item[this.xAxisPropName],
        y: item[this.yAxisPropName],
      };
    });
  }

  ngOnInit(): void {
    var ctx = document.getElementById('Chart');
    var options = {
      type: 'scatter',
      data: {
        datasets: [
          {
            pointBackgroundColor: '#69b2e4',
            data: this.preparedData(),
          },
        ],
      },
      options: {
        scaleShowValues: true,
        tooltips: {
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowBlur: 5,
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          backgroundColor: '#fff',
          titleFontStyle: 'normal',
          titleFontColor: '#000',
          titleFontSize: 14,
          titleMarginBottom: 10,
          bodyFontSize: 12,
          bodyFontColor: '#000',
          bodySpacing: 10,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          callbacks: {
            title: (tooltipItem, data) => {
              const { datasetIndex, index } = tooltipItem[0];
              const { datasets } = data;
              return datasets[datasetIndex].data[index].title;
            },
            label: (tooltipItem) => {
              return [
                `Price: ${formatCurrency(tooltipItem.value, 'en', '$')}`,
                `Date: ${moment(tooltipItem.label).format('MM/DD/YYYY')}`,
              ];
            },
          },
        },
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              bounds: 'ticks',
              ticks: {
                autoSkip: false,
              },
              gridLines: {
                display: false,
              },
              type: 'time',
              time: {
                displayFormats: {
                  month: 'MMM',
                },
                unit: 'month',
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                drawBorder: false,
              },
              bounds: 'ticks',
              ticks: {
                beginAtZero: true,
                autoSkip: false,
                // Include a dollar sign in the ticks
                callback: function (value, index, values) {
                  return '$' + value;
                },
              },
            },
          ],
        },
      },
    };
    new Chart(ctx, options);
  }
}
