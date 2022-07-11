import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectCommentComponent } from './reject-comment.component';

describe('RejectCommentComponent', () => {
  let component: RejectCommentComponent;
  let fixture: ComponentFixture<RejectCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
