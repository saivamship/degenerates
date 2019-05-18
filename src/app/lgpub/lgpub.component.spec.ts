import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgpubComponent } from './lgpub.component';

describe('LgpubComponent', () => {
  let component: LgpubComponent;
  let fixture: ComponentFixture<LgpubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LgpubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgpubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
