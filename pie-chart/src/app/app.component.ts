import { SignalRService } from './services/signal-r.service';
import { donutChartOptions } from './Models/donutChartOptions';
import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'pie-chart';
 

  private hubConnection : signalR.HubConnection;



constructor(private apiCaller: HttpClient, public signalRService: SignalRService){
  this.apiCaller.get("https://piechart-with-signalr.herokuapp.com/api/Pie/getdatasets").subscribe(res =>{
    console.log(res);
  });
  this.signalRService.startConnection();
  this.signalRService.addTransferChartDataListener();
}

  
  
  
}


