import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditManagerRequestComponent } from './edit-manager-request.component';

describe('EditManagerRequestComponent', () => {
  let component: EditManagerRequestComponent;
  let fixture: ComponentFixture<EditManagerRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditManagerRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditManagerRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
