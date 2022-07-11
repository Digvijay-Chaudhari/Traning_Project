import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RequestService } from 'src/app/SharedModule/Services/request.service';
import { CommentDialogComponent } from '../comment-dialog/comment-dialog.component';

@Component({
  selector: 'app-forwarded-requests',
  templateUrl: './forwarded-requests.component.html',
  styleUrls: ['./forwarded-requests.component.css']
})
export class ForwardedRequestsComponent implements OnInit {

  
  constructor(private requestService: RequestService, private router: Router, private toaster: ToastrService, private matdialog: MatDialog) { }
  searchBox: any = "";
  rejectComment: string;
  RequestData: any;
  userId: any;
  requestId: Number;
  detailRequestId:any;
  p: number = 1;

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    this.requestService.GetForwadedRequests(this.userId, 3).subscribe(res => {
      this.RequestData = res;
      console.log(res);
    })
  }

  requestDecisionByManager(forwardId: Number, Status: Number,requestId:Number) {
    this.detailRequestId = requestId;
    this.requestService.RequestDecisonBySupManager(forwardId, Status).subscribe(res => {
      console.log(res);
      if (Status == 1) {
        this.requestService.RequestDecisonByManager(this.detailRequestId,Status).subscribe(ret=>{
          console.log(ret);
        })
        this.toaster.success('Request Accepted Sucessfully');
        window.location.reload();
      }
      else if (Status == 2) {
        this.router.navigate(['/rejectComment',requestId,forwardId]);
      }

    });
  }

  openDialog(rejectRequestId: Number): void {
    const dialogRef = this.matdialog.open(CommentDialogComponent, {
      width: '450px',
      height: '300px',
      data: { requestId: rejectRequestId },
    });
  }

  navigatepage() {
    this.router.navigate(['/addmanagerRequest']);
  }

  
}
