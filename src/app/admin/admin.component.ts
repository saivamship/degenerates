import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { StoreService } from '../store.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  uploadedFiles: any[] = [];
  index: number = 0;
  private items: MenuItem[];

  constructor(private fb: FormBuilder, private router: Router, private storeService: StoreService) { }
  userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    fileName: ['']
  });
  ngOnInit() {
    this.items = [{
      label: 'File',
      items: [
        { label: 'New', icon: 'fa fa-plus' },
        { label: 'Open', icon: 'fa fa-download' }
      ]
    },
    {
      label: 'Edit',
      items: [
        { label: 'Undo', icon: 'fa fa-refresh' },
        { label: 'Redo', icon: 'fa fa-repeat' }
      ]
    }];

  }


  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
      this.storeService.fileList.push(file.name)
    }
  }



  Submit() {
    this.storeService.fileList = this.uploadedFiles;

    this.router.navigate(['/graph-display'])
  }


  ngOnDestroy() {
    // this.storeService.fileList = null;
  }
}





