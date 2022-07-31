import { Component, OnInit, ViewChild } from '@angular/core';

import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chartline',
  templateUrl: './chartline.component.html',
  styleUrls: ['./chartline.component.css']
})

export class ChartlineComponent implements OnInit {

  constructor() { }

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40, 22, 35, 14, 21, 80],
        label: 'Series A',
        // backgroundColor: 'rgba(148,159,177,0.2)',
        // borderColor: 'rgba(148,159,177,1)',
        // pointBackgroundColor: 'rgba(148,159,177,1)',
        // pointBorderColor: '#fff',
        // pointHoverBackgroundColor: '#fff',
        // pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
        // tension: 0,
      }
    ],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    animations: {
      tension: {
        duration: 2000,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: false
      }
    },
    elements: {
      line: {
        tension: 0,
        fill: true,
        stepped: false,
        capBezierPoints: false,
      },
      point: {
        // display: false,
        radius: 3,
        pointStyle: 'circle',
        hoverRadius: 5,
        // tension: 0,
      }
    },
    scales: {
      x: {
        grid: {
          display: true,
          borderColor: '#000000',
          color: 'rgba(169,169,169,0.2)',
        },
        ticks: {
          color: 'gray',
          font: {
            family: 'sans-serif',
            size: 10,
            weight: 'bold',
          },
        },
        title: {
          display: true,
          text: 'Months',
          font: {
            family: 'sans-serif',
            size: 14,
            style: 'normal',
            weight: 'bold',
          }
        },
      },
      y: {
        min: 0,
        max: 100,
        grid: {
          display: true,
          borderColor: '#000000',
          color: 'rgba(169,169,169,0.2)',
        },
        display: true,
        ticks: {
          stepSize: 1,
          color: 'gray',
          font: {
            family: 'sans-serif',
            size: 10,
            weight: 'bold', // 'normal'
          },
        },
        title: {
          display: true,
          text: 'Values',
          font: {
            family: 'sans-serif',
            size: 14,
            style: 'normal',
            weight: 'bold',
          }
        },
      },
      // 'y-axis-0': {
      //   // position: 'left',
      // },
      // 'y-axis-1': {
      //   // position: 'right',
      //   grid: {
      //     // color: 'rgba(255,0,0,0.3)',
      //   },
      //   ticks: {
      //     // color: 'red'
      //   }
      // }
    },
    plugins: {
      title: {
        display: true,
        text: 'Custom Chart Title',
        padding: {
          top: 1,
          bottom: 1
        },
      },
      subtitle: {
        display: true,
        text: 'Custom Chart Subtitle'
      },
      legend: {
        display: true,
        labels: {
          color: 'rgb(255, 99, 132)'
        }
      }
    },
    layout: {
      padding: 0
    },
  };

  public lineChartType: ChartType = 'line';

  private static generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  public randomize(): void {
    for (let i = 0; i < this.lineChartData.datasets.length; i++) {
      for (let j = 0; j < this.lineChartData.datasets[i].data.length; j++) {
        this.lineChartData.datasets[i].data[j] = ChartlineComponent.generateNumber(i);
      }
    }
    this.chart?.update();
  }

  ngOnInit(): void { }
}
