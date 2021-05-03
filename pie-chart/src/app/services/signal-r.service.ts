import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { Chart } from 'angular-highcharts';
import { Options } from 'highcharts';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  
  sum:number = 0;
  donutChart: Chart;
  private hubConnection : signalR.HubConnection;

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
                            .withUrl('https://piechart-with-signalr.herokuapp.com/results')
                            .build();
 
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  public addTransferChartDataListener = () => {
    this.hubConnection.on('NewResults', (res) => {
      const donutChartOptions: Options = {
        chart: {
            type: 'pie',
            plotShadow: false
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            pie: {
                innerSize: '99%',
                borderWidth: 40,
                borderColor: null,
                slicedOffset: 20,
                dataLabels: {
                    connectorWidth: 0
                }
            }
        },
        title: {
            verticalAlign: 'middle',
            floating: true,
            text: '$ 500,000,000'
        },
        legend: {
            enabled: false
        },
        series: [
            {
                type: 'pie',
                data: res
            }
        ]
      };
      //donutChartOptions.series[0].data = res;
      donutChartOptions.title.text = this.average(res);
      //console.log(donutChartOptions.series[0].data)
      this.donutChart = new Chart(donutChartOptions);
    });
  }

  average(res){
    res.forEach(element => {
      this.sum += element.y;
    });
    this.sum = this.sum/res.length;
    return `average: ${this.sum.toFixed(2)}`;
  }

}
