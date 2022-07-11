import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardedRequestsComponent } from './forwarded-requests.component';

describe('ForwardedRequestsComponent', () => {
  let component: ForwardedRequestsComponent;
  let fixture: ComponentFixture<ForwardedRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForwardedRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardedRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
