import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RequestService } from 'src/app/SharedModule/Services/request.service';

@Component({
  selector: 'app-comment-dialog',
  templateUrl: './comment-dialog.component.html',
  styleUrls: ['./comment-dialog.component.css']
})
export class CommentDialogComponent implements OnInit {

  constructor(private matDialogRef:MatDialogRef<CommentDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private requestService:RequestService) { }

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
