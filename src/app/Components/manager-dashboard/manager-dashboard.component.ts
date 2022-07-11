import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BudgetData } from 'src/app/Models/Budgetdata.model';
import { forwordRequestDetail } from 'src/app/Models/forwordRequestDetail';
import { RequestService } from 'src/app/SharedModule/Services/request.service';
import { CommentDialogComponent } from '../comment-dialog/comment-dialog.component';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {

  constructor(private requestService: RequestService, private router: Router, private toaster: ToastrService, private matdialog: MatDialog) { }

  searchBox: any = "";
  rejectComment: string;
  RequestData: any;
  userId: any;
  requestId: Number;
  superManagerId:any;
  requestForword:forwordRequestDetail;
  p: number = 1;

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    this.requestService.GetRequestByStatusAndManagerID(this.userId, 0).subscribe(res => {
      this.RequestData = res;
      console.log(res);
    })
  }

  requestDecisionByManager(requestId: Number, Status: Number) {
    if (Status == 1) {
      this.requestService.RequestDecisonByManager(requestId, Status).subscribe(res => {
        console.log(res);
      });
      this.toaster.success('Request Accepted Sucessfully');
      window.location.reload();
    }
    else if (Status == 2) {
      this.router.navigate(['/rejectComment', requestId,0]);
    }
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

  public checkAmmountForUser(amt: any): boolean {

    if (amt <= 5000) {
      return true
    }
    else {
      return false;
    }
  }

  public checkForwordButtonForUser(dat: any): boolean {

    if (dat > 5000) {
      return true
    }
    else {
      return false;
    }
  }

  public forwordRequest(req: any) {
      console.log(req);
      this.superManagerId=localStorage.getItem("managerId");
      this.requestForword = new forwordRequestDetail();
      this.requestForword.RequestId = req.requestId;
      this.requestForword.UserId = req.userId;
      this.requestForword.SuperManagerId = this.superManagerId;
      this.requestForword.ManagerId = req.managerId;
      this.requestForword.Purpose = req.purpose;
      this.requestForword.Description = req.description;
      this.requestForword.EstAmount = req.estAmount;
      this.requestForword.AdvAmount = req.advAmount;
      this.requestForword.Comments = req.comment;
      this.requestForword.IsDeleted = req.isDeleted;
      this.requestForword.RequestDate = req.requestDate;
      this.requestForword.RequestStatus = 3;


      this.requestService.AddForwardedRequest(this.requestForword).subscribe(res=>{
        if(res == 1){
          this.requestService.RequestDecisonByManager(req.requestId,3).subscribe(ret=>{
              console.log(ret);
          })
          console.log(res);
          this.toaster.success("Request Forwarded Successsfully");
          window.location.reload();
        }
      })
  }
}




