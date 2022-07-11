import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardedRequestHistoryComponent } from './forwarded-request-history.component';

describe('ForwardedRequestHistoryComponent', () => {
  let component: ForwardedRequestHistoryComponent;
  let fixture: ComponentFixture<ForwardedRequestHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForwardedRequestHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardedRequestHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
