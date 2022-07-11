import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardedRejectCommentComponent } from './forwarded-reject-comment.component';

describe('ForwardedRejectCommentComponent', () => {
  let component: ForwardedRejectCommentComponent;
  let fixture: ComponentFixture<ForwardedRejectCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForwardedRejectCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardedRejectCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
