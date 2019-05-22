import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { saveAs }  from 'file-saver';

const mockDataDynamicsList = [ 'CIRT-2018-1.csv', 'CIRT-2018-2.csv', 'CIRT-2018-3.csv', 'CIRT-2018-4.csv', 'CIRT-2018-5.csv', 'CIRT-2018-6.csv' ]
const mockLppubList = [ '2019-Q1-Acquistions.csv', '2019-Q1-Performance.csv', '2018-Q4-Acquistions.csv', '2018-Q4-Performance.csv', '2018-Q3-Acquistions.csv', '2018-Q3-Performance.csv', '2018-Q2-Acquistions.csv', '2018-Q2-Performance.csv', ]
const mockDisclosureList = [ 'DUS-File_2019-1', 'DUS-File_2018-4', 'DUS-File_2018-3', 'DUS-File_2018-2', 'DUS-File_2018-1', 'DUS-File_2017-4', 'DUS-File_2017-3', 'DUS-File_2017-2', 'DUS-File_2017-1' ]
@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.sass']
})
export class DownloadComponent implements OnInit {

  public lppubList: string[] = mockLppubList;

  public dataDynamicsList: string[] = mockDataDynamicsList;

  public disclosureList: string[] = mockDisclosureList;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  // downloadFile(filename) {
  //   this.http.get('../../assets/files/CIRT-2018-1.csv', { responseType: 'text' }).subscribe(data =>{
  //     console.log("data", data)
  //     const blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
  //     saveAs(blob, filename);
  //   });
  // }

}
