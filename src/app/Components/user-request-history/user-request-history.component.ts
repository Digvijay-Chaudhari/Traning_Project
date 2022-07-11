import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RequestService } from 'src/app/SharedModule/Services/request.service';
import { CommentDialogComponent } from '../comment-dialog/comment-dialog.component';

@Component({
  selector: 'app-user-request-history',
  templateUrl: './user-request-history.component.html',
  styleUrls: ['./user-request-history.component.css']
})
export class UserRequestHistoryComponent implements OnInit {

  RequestData: any;
  searchBox:any ="";
  userId:any;
  status:Number;
  p: number = 1;
  constructor(private requestService:RequestService,private router:Router,private toaster:ToastrService,private matdialog:MatDialog) { }

  ngOnInit(): void {

        this.userId = localStorage.getItem('userId');
        this.requestService.GetHistoryOfRequestByUserId(this.userId).subscribe(res=>{
        this.RequestData = res;
        console.log(res);
      })
    
  }

  openDialog(rejectRequestId:Number): void {
    const dialogRef = this.matdialog.open(CommentDialogComponent, {
      width: '450px',
      height: '300px',
      data: {requestId : rejectRequestId},
    });
  }

  public navigatepage(){
    this.router.navigate(['/addmanagerRequest']);
  }

}
