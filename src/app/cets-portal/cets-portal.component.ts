import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective, Label, Color } from 'ng2-charts';
import { MatSelectChange } from '@angular/material';
import { HttpClient } from '@angular/common/http';

const mockTimeData = [
  'Jan 2017',
  'Apr 2017',
  'Jul 2017',
  'Oct 2017',
  'Jan 2018',
  'Apr 2018',
  'Jul 2018',
  'Oct 2018',
  'Jan 2019',
  'Apr 2018'
];

const mockTest1Data = [65, 59, 80, 81, 56, 55, 40, 42, 78, 82];
const mockTest2Data = [23, 34, 30, 91, 98, 55, 35, 8, 14, 72];
const mockTest3Data = [22, 95, 92, 67, 11, 95, 6, 31, 84, 8];
const mockTest4Data = [43, 60, 58, 70, 6, 55, 70, 71, 49, 95];

@Component({
  selector: 'app-cets-portal',
  templateUrl: './cets-portal.component.html',
  styleUrls: ['./cets-portal.component.scss']
})
export class CetsPortalComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  // LINE CHART DATA SETUP
  public lineChartData: Chart.ChartDataSets[] = [
    { data: mockTest1Data, label: 'test1' }
  ];
  public lineChartLabels: Label[] = mockTimeData;
  public lineChartOptions: Chart.ChartOptions = {
    responsive: false,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [{}]
    }
  };
  public lineChartColors: Color[] = [
    { // red
      backgroundColor: 'rgb(0, 172, 220, 0.1)',
      borderColor: '#007697',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  // X-AXIS SELECT DROPDOWN OPTIONS
  // public xDataList = [
  //   { label: 'test1', value: 'test1' },
  //   { label: 'test2', value: 'test2' },
  //   { label: 'test3', value: 'test3' },
  //   { label: 'test4', value: 'test4' },
  //   { label: 'test5', value: 'test5' }
  // ];
  // public selectedX;

  // Y-AXIS SELECT DROPDOWN OPTIONS
  public yDataList = [
    { label: 'test1', value: 'test1' },
    { label: 'test2', value: 'test2' },
    { label: 'test3', value: 'test3' },
    { label: 'test4', value: 'test4' },
  ];
  public selectedY;

  // AG-GRID DATA SETUP
  public columnDefs = [
    { headerName: 'Loan Number', field: 'loan-number' },
    { headerName: 'Servicer Name', field: 'servicer-name' },
    { headerName: 'Seller Name', field: 'seller-name' }
  ];

  public rowData = [
    { 'loan-number': '1111111', 'servicer-name': 'Fannie Mae', 'seller-name': 'Wells Fargo' },
    { 'loan-number': '2222222', 'servicer-name': 'Fannie Mae', 'seller-name': 'JP Morgan' },
    { 'loan-number': '3333333', 'servicer-name': 'Fannie Mae', 'seller-name': 'Goldman Sachs' },
  ];

  public rowDataArray = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.selectedX = 'test1';
    this.selectedY = 'test1';

    // this.http.get('../../assets/resources/files/CIRT_2018-8_122018.csv', { responseType: 'text' }).subscribe(data =>{
    //   console.log(data);
    //   const lineData = data.split(/[\r\n]+/);
    //   const lineDataSplice = lineData.splice(0, 300);
    //   lineDataSplice.forEach(line => {
    //     const fieldData = line.split('|');
    //     this.rowDataArray.push(fieldData);
    //   });
    //   console.log(this.rowDataArray);
    // });
  }

  // LINE CHART EVENTS FUNCTIONS
  public chartClicked({
      event,
      active
    }: {
      event: MouseEvent;
      active: {}[];
    }): void {
      console.log(event, active);
  }

  public chartHovered({
      event,
      active
    }: {
      event: MouseEvent;
      active: {}[];
    }): void {
      console.log(event, active);
  }

  // Dropdown Selection Change Event Functions
  // public selectionChangeX(event: MatSelectChange) {
  //   console.log("X selection changed", event);
  //   switch(event.value) {
  //     case 'test1': {
  //       this.lineChartLabels = mockTest1Data.map(String);
  //       break;
  //     }
  //     case 'test2': {
  //       this.lineChartLabels = mockTest2Data.map(String);
  //       break;
  //     }
  //     case 'test3': {
  //       this.lineChartLabels = mockTest3Data.map(String);
  //       break;
  //     }
  //     case 'test4': {
  //       this.lineChartLabels = mockTest4Data.map(String);
  //       break;
  //     }
  //     case 'test5': {
  //       this.lineChartLabels = mockTimeData.map(String);
  //       break;
  //     }
  //   }
  // }

  public selectionChangeY(event: MatSelectChange) {
    console.log("Y selection changed", event);
    switch(event.value) {
      case 'test1': {
        this.lineChartData = [{
          data: mockTest1Data,
          label: 'test1',
        }];
        break;
      }
      case 'test2': {
        this.lineChartData = [{
          data: mockTest2Data,
          label: 'test2',
        }];
        break;
      }
      case 'test3': {
        this.lineChartData = [{
          data: mockTest3Data,
          label: 'test3',
        }];
        break;
      }
      case 'test4': {
        this.lineChartData = [{
          data: mockTest4Data,
          label: 'test4',
        }];
        break;
      }
    }
  }
}
