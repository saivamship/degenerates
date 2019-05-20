import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CetsPortalComponent } from './cets-portal.component';

describe('CetsPortalComponent', () => {
  let component: CetsPortalComponent;
  let fixture: ComponentFixture<CetsPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CetsPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CetsPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
