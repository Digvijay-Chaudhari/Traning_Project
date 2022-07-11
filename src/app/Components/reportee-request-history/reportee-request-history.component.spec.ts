import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteeRequestHistoryComponent } from './reportee-request-history.component';

describe('ReporteeRequestHistoryComponent', () => {
  let component: ReporteeRequestHistoryComponent;
  let fixture: ComponentFixture<ReporteeRequestHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteeRequestHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteeRequestHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
