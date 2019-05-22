import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective, Color, Label } from 'ng2-charts';
import { MatSelectChange } from '@angular/material';



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
  selector: 'app-mock-data',
  templateUrl: './mock-data.component.html',
  styleUrls: ['./mock-data.component.scss']
})
export class MockDataComponent implements OnInit {


  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  public loanPerformancePayload = [
    {
      statName: 'Test',
      statValue: '0.35%',
      statUpdate: 'since last month',
      statMonthIncrements: [40, 45, 50, 52, 56, 54, 57, 61, 56, 57]
    },
    {
      statName: 'Foreclosure Costs',
      statValue: '$12,304',
      statUpdate: '(2.3% up from Q2)',
      statMonthIncrements: [40, 45, 50, 52, 56, 54, 57, 61, 56, 57]
    },
    {
      statName: 'Net Sales Proceeds',
      statValue: '$45,294',
      statUpdate: '(5% up from Q2)',
      statMonthIncrements: [40, 45, 50, 52, 56, 54, 57, 61, 56, 57]

    },
    {
      statName: 'Property Pres...',
      statValue: '$37,293',
      statUpdate: '(5% up from Q2)',
      statMonthIncrements: [40, 45, 50, 52, 56, 54, 57, 61, 56, 57]

    },
    {
      statName: 'Assest Recov...',
      statValue: '$94,283',
      statUpdate: '(2% up from Q2)',
      statMonthIncrements: [40, 45, 50, 52, 56, 54, 57, 61, 56, 57]

    },
    {
      statName: 'Miscellaneous Holding...',
      statValue: '$12,321',
      statUpdate: '(1% up from Q2)',
      statMonthIncrements: [40, 45, 50, 52, 56, 54, 57, 61, 56, 57]

    },
    {
      statName: 'Associated Taxes for...',
      statValue: '$1,028',
      statUpdate: '(5% up from Q2)',
      statMonthIncrements: [40, 45, 50, 52, 56, 54, 57, 61, 56, 57]

    },
    {
      statName: 'Test',
      statValue: '+.067%',
      statUpdate: '(5% up from Q2)',
      statMonthIncrements: [32, 21, 23, 32, 33, 36, 38, 43, 46, 93]
    },
    {
      statName: 'Other Foreclosu...',
      statValue: '$23,123',
      statUpdate: '(5% up from Q2)',
      statMonthIncrements: [40, 45, 50, 52, 56, 54, 57, 61, 56, 57]
    },
    {
      statName: 'Principle Forgiven...',
      statValue: '2.3%',
      statUpdate: '(.05% up from Q2)',
      statMonthIncrements: [40, 45, 50, 52, 56, 54, 57, 61, 56, 57]
    },
  ];

  public performanceFile = [
    {
      statName: 'Foreclosure Costs',
      statValue: '$23,938',
      statChange: '+.33',
      statChangePercent: '+0.23%',
      statHigh: '$26,234',
      statLow: '$13,459'
    },
    {
      statName: 'Assest Recovery Costs',
      statValue: '$12,937',
      statChange: '+.45',
      statChangePercent: '+0.56%',
      statHigh: '$32,473',
      statLow: '$3,459'
    },
    {
      statName: 'Principle Forgiveness Amount',
      statValue: '$23,938',
      statChange: '+.33',
      statChangePercent: '+0.23%',
      statHigh: '$26,234',
      statLow: '$13,459'
    },
    {
      statName: 'Credit Enhancement Proceeds',
      statValue: '$23,938',
      statChange: '+.33',
      statChangePercent: '+0.23%',
      statHigh: '$26,234',
      statLow: '$13,459'
    },
    {
      statName: 'Non Interest Bearing UPB',
      statValue: '$23,938',
      statChange: '+.33',
      statChangePercent: '+0.23%',
      statHigh: '$26,234',
      statLow: '$13,459'
    },
    {
      statName: 'Net Sale Proceeds',
      statValue: '$23,938',
      statChange: '+.33',
      statChangePercent: '+0.23%',
      statHigh: '$26,234',
      statLow: '$13,459'
    },
    {
      statName: 'Other Foreclosure Proceeds',
      statValue: '$23,938',
      statChange: '+.33',
      statChangePercent: '+0.23%',
      statHigh: '$26,234',
      statLow: '$13,459'
    },
    {
      statName: 'Adjusted Months to Maturity',
      statValue: '6',
      statChange: '+.33',
      statChangePercent: '+0.23%',
      statHigh: '12',
      statLow: '2'
    }
  ];

  // LINE CHART DATA SETUP
  public lineChartData: Chart.ChartDataSets[] = [
    {
      data: this.loanPerformancePayload[0].statMonthIncrements,
      label: this.loanPerformancePayload[0].statName,
      backgroundColor: '#20b2aa'
    },
    {
      data: this.loanPerformancePayload[7].statMonthIncrements,
      label: this.loanPerformancePayload[7].statName,
      backgroundColor: '#FA8072'
    }
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

  constructor() { }

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
    switch (event.value) {
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



