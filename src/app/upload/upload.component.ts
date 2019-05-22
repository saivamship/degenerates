import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  userForm: any;

  constructor() { }

  ngOnInit() {
    // this.userForm  = this.formbuilder.group({
    //   'name': ['']
    // })
  }

}
