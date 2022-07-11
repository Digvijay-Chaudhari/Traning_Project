import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardedCommentDialogComponent } from './forwarded-comment-dialog.component';

describe('ForwardedCommentDialogComponent', () => {
  let component: ForwardedCommentDialogComponent;
  let fixture: ComponentFixture<ForwardedCommentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForwardedCommentDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardedCommentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
