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
  buttonDisabled: boolean = false;


  constructor(private fb: FormBuilder, private router: Router, private storeService: StoreService) { }

  userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    fileName: ['', Validators.required],
    comment: ['']
  });

  ngOnInit() {

  }

  handleBack() {
    this.router.navigate(['/graph-display'])
  }

  onUpload(event) {
    this.buttonDisabled = false;
    for (let file of event.files) {
      this.uploadedFiles.push(file);
      this.storeService.fileList.push(file.name)
    }
  }

  submit() {
    this.storeService.fileList = this.uploadedFiles;
       this.router.navigate(['/graph-display'])
  }


}





