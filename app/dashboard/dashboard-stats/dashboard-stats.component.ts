import { Component, OnInit,Input } from '@angular/core';
import * as Chart from 'chart.js'
@Component({
  selector: 'app-dashboard-stats',
  templateUrl: './dashboard-stats.component.html',
  styleUrls: ['./dashboard-stats.component.css']
})
export class DashboardStatsComponent{

    title1 = 'linechartchartjs';
    canvas1: any;
    ctx1: any;

    public myChart: Chart;

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
              label: "Rank Changes",
              backgroundColor: "#9bd3dd",
              pointBackgroundColor: "#0093b2",
              data: [99,98,97,96,99,100]
          },
      ]
      },
      options: {
        title: {
          display: true,
          text: 'Rank Changes Over the Past Week'
      },
        responsive: false,
      }
  
    });
  }
  
  

  
    ngAfterViewInit() {
      this.drawchart1();
    }
    
  }