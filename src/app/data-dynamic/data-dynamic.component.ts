import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseChartDirective, Label, Color } from 'ng2-charts';
import { MatSelectChange } from '@angular/material';
import { AgGridNg2 } from 'ag-grid-angular';

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

const mockTest1Data = [
  16988605373,
  15321053731,
  14691352555,
  13413482555,
  11478216540,
  11060459029,
  10929616298,
  9453556487,
  8743556487,
  7833556487
];
const mockTest2Data = [5, 3, 4, 4, 7, 55, 35, 8, 14, 72];
const mockTest3Data = [22, 95, 92, 67, 11, 95, 6, 31, 84, 8];
const mockTest4Data = [43, 60, 58, 70, 6, 55, 70, 71, 49, 95];

const mockRowData = [
  {
    LOANIDENTIFIER: '37262251',
    SELLERNAME: 'Fannie Mae',
    SERVICERNAME: '',
    ORIGINALINTERESTRATE: '3.8750',
    CURRENTINTERESTRATE: '',
    ORIGINALLOANTOVALUERATIO: '80',
    ORIGINALCOMBINEDLOANTOVALUERATIO: '80',
    TOTALPRINCIPALCURRENT: '44454.27'
  },
  {
    LOANIDENTIFIER: '37262252',
    SELLERNAME: 'Fannie Mae',
    SERVICERNAME: '',
    ORIGINALINTERESTRATE: '3.8750',
    CURRENTINTERESTRATE: '',
    ORIGINALLOANTOVALUERATIO: '80',
    ORIGINALCOMBINEDLOANTOVALUERATIO: '80',
    TOTALPRINCIPALCURRENT: '44454.27'
  },
  {
    LOANIDENTIFIER: '37262253',
    SELLERNAME: 'Fannie Mae',
    SERVICERNAME: '',
    ORIGINALINTERESTRATE: '3.8750',
    CURRENTINTERESTRATE: '',
    ORIGINALLOANTOVALUERATIO: '80',
    ORIGINALCOMBINEDLOANTOVALUERATIO: '80',
    TOTALPRINCIPALCURRENT: '44454.27'
  }
];

@Component({
  selector: 'app-data-dynamic',
  templateUrl: './data-dynamic.component.html',
  styleUrls: ['./data-dynamic.component.scss']
})
export class DataDynamicComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  @ViewChild('agGrid') agGrid: AgGridNg2;

  // LINE CHART DATA SETUP
  public lineChartData: Chart.ChartDataSets[] = [{ data: null, label: null }];
  public lineChartLabels: Label[];
  public lineChartOptions: Chart.ChartOptions = {
    responsive: false,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [{}]
    }
  };
  public lineChartColors: Color[] = [
    {
      // red
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
    { label: 'Total UPB', value: 'totalUPB' },
    { label: 'UPB Delta', value: 'UPBDelta' }
  ];
  public selectedY;

  // AG-GRID DATA SETUP
  public columnDefs = [
    {
      headerName: 'Loan Identifier',
      field: 'LOANIDENTIFIER',
      suppressSizeToFit: false
    },
    {
      headerName: 'Deal Id',
      field: 'REFERENCEPOOLID',
      suppressSizeToFit: false
    },
    {
      headerName: 'Seller Name',
      field: 'SELLERNAME',
      suppressSizeToFit: false
    },
    {
      headerName: 'Servicer Name',
      field: 'SERVICERNAME',
      suppressSizeToFit: false
    },
    {
      headerName: 'Original Interest Rate',
      field: 'ORIGINALINTERESTRATE',
      suppressSizeToFit: false
    },
    {
      headerName: 'Current Interest Rate',
      field: 'CURRENTINTERESTRATE',
      suppressSizeToFit: false
    },
    {
      headerName: 'Original Loan To Value Ratio (LTV)',
      field: 'ORIGINALLOANTOVALUERATIO(LTV)',
      suppressSizeToFit: false
    }
  ];

  onGridReady(params) {
    console.log('Called');
  }

  public rowData;

  public totalUPB;

  public UPBDelta;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.selectedX = 'test1';
    // this.selectedY = 'totalUPB';

    this.http.get('http://localhost:5000/creditrisk/fetchLGTime').subscribe(
      (resp: Label[]) => {
        console.log('Graph time resposne', resp);
        this.lineChartLabels = resp;
      },
      error => {
        console.log('ERROR when /creditrisk/fetchLGTime');
        this.lineChartLabels = mockTimeData;
      }
    );

    this.http.get('http://localhost:5000/creditrisk/deals-agg').subscribe(
      (response: any) => {
        console.log('Y data response', response);
        this.totalUPB = Object.values(JSON.parse(response));
        console.log('On Call' + this.totalUPB);
      },
      error => {
        console.log('ERROR when /creditrisk/deals-agg');
        this.totalUPB = mockTest1Data;
      }
    );

    this.http
      .get('http://localhost:5000/creditrisk/deals-percent-agg')
      .subscribe(
        (response: any) => {
          console.log('Y data response', response);
          this.UPBDelta = Object.values(JSON.parse(response));
          console.log('On Call' + this.UPBDelta);
        },
        error => {
          console.log('ERROR when /creditrisk/deals-percent-agg');
          this.UPBDelta = mockTest2Data;
        }
      );

    this.http
      .get(
        'http://localhost:5000/creditrisk/column-fetch?column1=LOANIDENTIFIER&column2=SELLERNAME&column3=SERVICERNAME&column4=ORIGINALINTERESTRATE&column5=CURRENTINTERESTRATE&column6=ORIGINALLOANTOVALUERATIO(LTV)&column7=REFERENCEPOOLID'
      )
      .subscribe(
        (response: any) => {
          console.log('Column Response', response);
          this.rowData = Object.values(JSON.parse(response));
          this.agGrid.api.sizeColumnsToFit();
        },
        error => {
          console.log('ERROR when /creditrisk/column-fetch');
          this.rowData = mockRowData;
        }
      );
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
    console.log('Y selection changed', event);
    console.log(this.totalUPB);
    console.log(this.UPBDelta);
    switch (event.value) {
      case 'totalUPB': {
        this.lineChartData = [
          {
            data: this.totalUPB,
            label: 'Total UPB'
          }
        ];
        break;
      }
      case 'UPBDelta': {
        this.lineChartData = [
          {
            data: this.UPBDelta,
            label: 'UPB Delta'
          }
        ];
        break;
      }
    }
  }

  // LINE CHART EVENTS FUNCTIONS
  public chartClicked({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {}

public chartHovered({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {}
}
