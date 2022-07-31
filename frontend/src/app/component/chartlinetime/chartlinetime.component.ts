import { Component, OnInit, ViewChild } from '@angular/core';

import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chartlinetime',
  templateUrl: './chartlinetime.component.html',
  styleUrls: ['./chartlinetime.component.css']
})

export class ChartlinetimeComponent implements OnInit {

  timeMid = ['00:00:01:331', '00:00:00:888', '00:00:01:831', '00:00:09:251', '00:00:00:973', '00:00:01:142'];
  dateCon = ['26/06/2022', '27/06/2022', '28/06/2022', '05/07/2022', '29/06/2022', '21/07/2022'];
  datetime: String[] = [];
  dataX: String[] = [];
  dataY: any[] = [];
  dataY1: any[] = [];

  private sortDate(datetime: any) {
    function myDate(s: any): any {
      var a = s.split(" ")[0].split(/-|\//);
      return new Date(a[2], a[1] - 1, a[0]);
    }

    function dmyOrdA(a: any, b: any) {
      return myDate(a) - myDate(b);;
    }

    return datetime.sort(dmyOrdA);
  }

  constructor() {
    for (var i = 0; i < this.timeMid.length; i++)
      this.datetime.push(this.dateCon[i] + " " + this.timeMid[i]);

    this.sortDate(this.datetime);

    for (var i = 0; i < this.datetime.length; i++) {
      this.dataX.push(this.datetime[i].split(" ")[0]);
      // this.dataY1.push(this.datetime[i].split(" ")[1]);

      var t = this.dateCon[i].split("/")[2] + "/" + this.dateCon[i].split("/")[1] + "/" + this.dateCon[i].split("/")[0] + " " +
        // this.timeMid[i];
        this.timeMid[i].split(":")[0] + ":" + this.timeMid[i].split(":")[1] + ":" + this.timeMid[i].split(":")[2];

      var totalSegs = (Number(this.timeMid[i].split(":")[0]) * 360) + (Number(this.timeMid[i].split(":")[1]) * 60) + (Number(this.timeMid[i].split(":")[2]));

      var date = new Date(t);
      var milliseconds = Number(date.getTime());

      this.dataY.push(totalSegs);

      console.log(this.datetime[i].split(" ")[0], this.timeMid[i], milliseconds, totalSegs, date);

    }
  }

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: this.dataY,
        label: 'Tempo Médio',
        fill: 'origin',
      },
    ],
    labels: this.dataX
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    animations: {
      // tension: {
      //   duration: 2000,
      //   easing: 'linear',
      //   from: 1,
      //   to: 0,
      //   loop: false
      // }
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
            size: 10,
            weight: 'bold',
          },
        },
        title: {
          display: true,
          text: 'Days',
          font: {
            family: 'sans-serif',
            size: 14,
            style: 'normal',
            weight: 'bold',
          }
        },
      },
      y: {
        // min: 0,
        // max: 100,
        display: false,
        grid: {
          display: true,
          borderColor: '#000000',
          color: 'rgba(169,169,169,0.2)',
        },
        ticks: {
          // stepSize: 1,
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
      'y-axis-1': {
        // position: 'right',
        grid: {
          // color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          // color: 'red'
        },
        title: {
          display: true,
          text: 'Miliseconds',
          font: {
            family: 'sans-serif',
            size: 14,
            style: 'normal',
            weight: 'bold',
          }
        },
      }
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
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';
            var seconds = context.parsed.y;

            if (label)
              // var milliseconds = context.parsed.y;
              // var d = new Date(context.parsed.x);
              // d.setMilliseconds(milliseconds);
              // label += ': ' + d.toLocaleTimeString("pt-BR");

              label += ': ' + seconds;

            return label;
          }
        }
      }
    },
    layout: {
      padding: 0
    },
  };

  public lineChartType: ChartType = 'line';

  ngOnInit(): void { }
}
