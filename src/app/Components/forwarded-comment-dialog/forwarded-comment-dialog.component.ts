import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RequestService } from 'src/app/SharedModule/Services/request.service';

@Component({
  selector: 'app-forwarded-comment-dialog',
  templateUrl: './forwarded-comment-dialog.component.html',
  styleUrls: ['./forwarded-comment-dialog.component.css']
})
export class ForwardedCommentDialogComponent implements OnInit {

  constructor(private matDialogRef:MatDialogRef<ForwardedCommentDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private requestService:RequestService) { }

  rejectionComment:any;
  request:any;

  ngOnInit(): void {
    this.requestService.getRequestById(this.data.requestId).subscribe(res=>{
        console.log(res);
        this.request = res; 
        this.rejectionComment = this.request.comments;
    })
  }


}
