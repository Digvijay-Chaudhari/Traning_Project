import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddManagerRequestComponent } from './add-manager-request.component';

describe('AddManagerRequestComponent', () => {
  let component: AddManagerRequestComponent;
  let fixture: ComponentFixture<AddManagerRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddManagerRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddManagerRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
