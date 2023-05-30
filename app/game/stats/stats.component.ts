import { Component,OnInit,Input } from '@angular/core';
import * as Chart from 'chart.js'
import { GameComponent } from '../game.component';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent{
  @Input() user: GameComponent;
  title1 = 'linechartchartjs';
  canvas1: any;
  ctx1: any;

  title2 = 'barchartchartjs';
  canvas2: any;
  ctx2: any;

  public myChart: Chart;
  public myChart2: Chart;
  drawchart1() {
    if (this.myChart) {
      this.myChart.destroy();
    }

    this.canvas1 = document.getElementById('lineChart');
    this.ctx1 = this.canvas1.getContext('2d');
    this.myChart = new Chart(this.ctx1, {
    type: 'line',
    data: {
      labels: ["Aug 15", "Aug 16", "Aug 17", "Aug 18", "Aug 19", "Aug 20"],
      datasets: [
        {   
            label: "Number of Players",
            backgroundColor: "#9bd3dd",
            pointBackgroundColor: "#0093b2",
            data: [12, 6, 15, 7, 11, 13]
        },
    ]
    },
    options: {
      title: {
        display: true,
        text: 'Number of Players Over the Past Week'
    },
      responsive: false,
    }

  });
}


  drawchart2() {
    if (this.myChart2) {
      this.myChart2.destroy();
    }

    this.canvas2 = document.getElementById('barChart');
    this.ctx2 = this.canvas2.getContext('2d');
    this.myChart2 = new Chart(this.ctx2, {
    type: 'horizontalBar',
    data: {
      labels: [["Welcome to","Time Tracker"], "Recorded!", ["Exprienced","Tracker"], ["Time Track"," Fan"], ["Tracker"," Trophy"]],
      datasets: [
        {   
            label: "Trophies Earning Rate",
            backgroundColor: "#9bd3dd",
            data: [65, 59, 30, 11, 5]
        },
    ]
    },
    options: {
      title: {
        display: true,
        text: 'Trophies Earning Rate'
    },
    tooltips:{
      callbacks: {
        label: function(tooltipItem, data) {
            return "is earned by " + tooltipItem.xLabel + "% of the players";
        }
    }
    },
    scales: {
      xAxes: [{
          ticks: {
              suggestedMin: 0,
              suggestedMax: 100,
              callback: function(value, index, values) {
                return value + '%';
              },
          }
      }]
  },

      responsive: false,
    }

  });

  }

  ngAfterViewInit() {
    this.drawchart1();
    this.drawchart2();
  }
  
}
