import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseChartDirective, Label, Color } from 'ng2-charts';
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

const mockTest1Data = [16988605373, 15321053731, 14691352555, 13413482555, 11478216540, 11060459029, 10929616298, 9453556487, 8743556487, 7833556487];
const mockTest2Data = [23, 34, 30, 91, 98, 55, 35, 8, 14, 72];
const mockTest3Data = [22, 95, 92, 67, 11, 95, 6, 31, 84, 8];
const mockTest4Data = [43, 60, 58, 70, 6, 55, 70, 71, 49, 95];

const mockRowData =  [
  { 'LOANIDENTIFIER': '37262251', 'SELLERNAME': 'Fannie Mae', 'SERVICERNAME': '', 'ORIGINALINTERESTRATE': '3.8750', 'CURRENTINTERESTRATE': '', 'ORIGINALLOANTOVALUERATIO': '80', 'ORIGINALCOMBINEDLOANTOVALUERATIO': '80', 'TOTALPRINCIPALCURRENT': '44454.27' },
  { 'LOANIDENTIFIER': '37262252', 'SELLERNAME': 'Fannie Mae', 'SERVICERNAME': '', 'ORIGINALINTERESTRATE': '3.8750', 'CURRENTINTERESTRATE': '', 'ORIGINALLOANTOVALUERATIO': '80', 'ORIGINALCOMBINEDLOANTOVALUERATIO': '80', 'TOTALPRINCIPALCURRENT': '44454.27' },
  { 'LOANIDENTIFIER': '37262253', 'SELLERNAME': 'Fannie Mae', 'SERVICERNAME': '', 'ORIGINALINTERESTRATE': '3.8750', 'CURRENTINTERESTRATE': '', 'ORIGINALLOANTOVALUERATIO': '80', 'ORIGINALCOMBINEDLOANTOVALUERATIO': '80', 'TOTALPRINCIPALCURRENT': '44454.27' },
];

@Component({
  selector: 'app-data-dynamic',
  templateUrl: './data-dynamic.component.html',
  styleUrls: ['./data-dynamic.component.scss']
})
export class DataDynamicComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  // LINE CHART DATA SETUP
  public lineChartData: Chart.ChartDataSets[] = [
    { data: mockTest1Data, label: 'Total UPB' }
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
    { label: 'Total UPB', value: 'totalUPB' },
    { label: 'test2', value: 'test2' },
    { label: 'test3', value: 'test3' },
    { label: 'test4', value: 'test4' },
  ];
  public selectedY;

  // AG-GRID DATA SETUP
  public columnDefs = [
    { headerName: 'Loan Identifier', field: 'LOANIDENTIFIER' },
    { headerName: 'Seller Name', field: 'SELLERNAME' },
    { headerName: 'Servicer Name', field: 'SERVICERNAME' },
    { headerName: 'Original Interest Rate', field: 'ORIGINALINTERESTRATE' },
    { headerName: 'Current Interest Rate', field: 'CURRENTINTERESTRATE' },
    { headerName: 'Original Loan To Value Ratio (LTV)', field: 'ORIGINALLOANTOVALUERATIO' },
    { headerName: 'Original Combined Loan to Value Ratio (CLTV)', field: 'ORIGINALCOMBINEDLOANTOVALUERATIO' },
    { headerName: 'Total Principal Current', field: 'TOTALPRINCIPALCURRENT' }
  ];

  public rowData;

  public totalUPB;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.selectedX = 'test1';
    this.selectedY = 'totalUPB';

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

    this.http.get('http://localhost:5000/creditrisk/fetchLGTime').subscribe(
      (resp: Label[]) => {
      console.log('Graph time resposne', resp);
      this.lineChartLabels = resp;
    }, error => {
      console.log("ERROR when /creditrisk/fetchLGTime");
      this.lineChartLabels = mockTimeData;
    });

    this.http.get('http://localhost:5000/creditrisk/deals-agg').subscribe(response => {
      console.log('Y data resposne', response);
      const responseValues = Object.values(response);
      this.totalUPB = responseValues;
    }, error => {
      console.log("ERROR when /creditrisk/deals-agg");
      this.totalUPB = mockTest1Data;
    });

    this.http.get('http://localhost:5000/creditrisk/column-fetch?column1=LOAN IDENTIFIER&column2=SELLER NAME&column3=SERVICER NAME&column4=ORIGINAL INTEREST RATE&column5=CURRENT INTEREST RATE&column6=ORIGINAL LOAN TO VALUE RATIO (LTV)&column7=ORIGINAL COMBINED LOAN TO VALUE RATIO (CLTV)')
    .subscribe((response: any[]) => {
      console.log("Column Response", response);
      this.rowData = response;
    }, error => {
      console.log("ERROR when /creditrisk/column-fetch");
      this.rowData = mockRowData;
    });
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
      case 'totalUPB': {
        this.lineChartData = [{
          data: this.totalUPB,
          label: 'total UPB',
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
