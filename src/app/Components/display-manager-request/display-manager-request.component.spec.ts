import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayManagerRequestComponent } from './display-manager-request.component';

describe('DisplayManagerRequestComponent', () => {
  let component: DisplayManagerRequestComponent;
  let fixture: ComponentFixture<DisplayManagerRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayManagerRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayManagerRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
