import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BudgetData } from 'src/app/Models/Budgetdata.model';
import { RequestService } from 'src/app/SharedModule/Services/request.service';
import { CommentDialogComponent } from '../comment-dialog/comment-dialog.component';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {

  constructor(private requestService:RequestService,private router:Router,private toaster:ToastrService,private matdialog:MatDialog) { }

  searchBox:any ="";
  rejectComment:string;
  RequestData: BudgetData[];

  ngOnInit(): void {
    this.requestService.getAllRequest().subscribe(res=>{
      this.RequestData = res;
    })
  }

  approvRequest(request:BudgetData){
    this.requestService.decisionRequest(request.id,{id:request.id,description:request.description,purpose:request.purpose,approver:request.approver,
      estimatedCost:request.estimatedCost,adancedAmount:request.adancedAmount,
      plannedDate:request.plannedDate,isApproved:true,isRejected:false}).subscribe(res=>{
        console.log(res);
        this.toaster.success('Request Approved Succesfully');
        window.location.reload();
      })
  }

  rejectRequest(request:BudgetData){
    this.requestService.decisionRequest(request.id,{id:request.id,description:request.description,purpose:request.purpose,approver:request.approver,
      estimatedCost:request.estimatedCost,adancedAmount:request.adancedAmount,
      plannedDate:request.plannedDate,isApproved:false,isRejected:true}).subscribe(res=>{
        console.log(res);
        this.toaster.success('Request Rejected Sucessfully');
        window.location.reload();
      })
  }

  // openDialog(request:BudgetData){ 
  //     this.matdialog.open(CommentDialogComponent,{height:'40%',width:'20%',data:{rejectComment:this.rejectComment}});
  //     this.requestService.decisionRequest(request.id,{id:request.id,description:request.description,purpose:request.purpose,approver:request.approver,
  //       estimatedCost:request.estimatedCost,adancedAmount:request.adancedAmount,
  //       plannedDate:request.plannedDate,isApproved:false,isRejected:true,comment:this.rejectComment}).subscribe(res=>{
  //         console.log(res);
  //         this.toaster.success('Request Rejected Sucessfully');
  //         window.location.reload();
  //       })
  // }

  // openDialog(request:BudgetData): void {
  //   const dialogRef = this.matdialog.open(CommentDialogComponent, {height:'40%',width:'20%',data:{rejectComment:this.rejectComment}});
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     debugger;
  //     this.rejectComment = result;
  //   });
  //   this.requestService.decisionRequest(request.id,{id:request.id,description:request.description,purpose:request.purpose,approver:request.approver,
  //           estimatedCost:request.estimatedCost,adancedAmount:request.adancedAmount,
  //           plannedDate:request.plannedDate,isApproved:false,isRejected:true,comment:this.rejectComment}).subscribe(res=>{
  //             console.log(res);
  //             this.toaster.success('Request Rejected Sucessfully');
  //             window.location.reload();
  //           })
  // }

  openDialog(request:BudgetData){
    this.matdialog.open(CommentDialogComponent,{height:'40%',width:'20%'});
  }

  navigatepage(){
    this.router.navigate(['/landingpage']);
  }

}

 
  

