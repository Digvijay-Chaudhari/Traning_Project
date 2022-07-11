import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerRequestHistoryComponent } from './manager-request-history.component';

describe('ManagerRequestHistoryComponent', () => {
  let component: ManagerRequestHistoryComponent;
  let fixture: ComponentFixture<ManagerRequestHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerRequestHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerRequestHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
