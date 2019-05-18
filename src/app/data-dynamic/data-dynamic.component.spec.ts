import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDynamicComponent } from './data-dynamic.component';

describe('DataDynamicComponent', () => {
  let component: DataDynamicComponent;
  let fixture: ComponentFixture<DataDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
