import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseChartDirective, Label, Color } from 'ng2-charts';
import { MatSelectChange } from '@angular/material';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-graph-display',
  templateUrl: './graph-display.component.html',
  styleUrls: ['./graph-display.component.scss']
})
export class GraphDisplayComponent implements OnInit {
  constructor(private store: StoreService) { }
  // nancy: boolean = false;
  tabs = [];
  // tabs: any = [];
  ngOnInit() {


    if (this.store.fileList) {

      this.store.fileList.forEach(el => {

        this.tabs.push(el.name)
      });

    }

  }
}
