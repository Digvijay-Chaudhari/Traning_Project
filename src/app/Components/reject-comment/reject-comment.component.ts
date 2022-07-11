import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RequestService } from 'src/app/SharedModule/Services/request.service';

@Component({
  selector: 'app-reject-comment',
  templateUrl: './reject-comment.component.html',
  styleUrls: ['./reject-comment.component.css']
})
export class RejectCommentComponent implements OnInit {

  constructor(private requestService: RequestService, private routers: ActivatedRoute, private toaster: ToastrService, private router: Router) { }

  comment: string;
  forwardRequestId: any = this.routers.snapshot.params['forwardId']; ;
  requestId: any = this.routers.snapshot.params['requestId'];;

  ngOnInit(): void {
  }

  onFormSubmit(message: any) {
    if (message != '') {
      // this.forwardRequestId = this.routers.snapshot.params['forwardId'];
      // this.requestId = this.routers.snapshot.params['requestId'];
      if (this.forwardRequestId == 0)
      {
        this.requestService.RejectionComment(this.requestId, message).subscribe(res => {
          console.log(res);
          if (res == 1) {
            this.requestService.RequestDecisonByManager(this.requestId, 2).subscribe(descision => {
              console.log(descision);
              if(descision ==1){
                  this.toaster.success('Comment added Successfully');
                  this.router.navigate(['/managerdashboard'])
              }
              else{
                this.toaster.error('Comment is not added');
              }
            })
          }
        })
      } 
      else
      {
        this.requestService.forwardedRejectionCommentByManager(this.forwardRequestId, message).subscribe(res => {
          console.log(res);
          if (res == 1) {
            this.requestService.RequestDecisonByManager(this.requestId, 2).subscribe(descision => {
              console.log(descision);
              if(descision ==1){
                this.requestService.RejectionComment(this.requestId,message).subscribe(rejcomment =>{
                  console.log(rejcomment);
                  window.location.reload();
                })
                this.toaster.success('Comment added Successfully');
                this.router.navigate(['/forwardedRequests'])
              }
              else
              {
                this.toaster.error('Comment is not added');
                this.router.navigate(['/forwardedRequests'])  
              }
            })
          }
        })
      }


    }
  }

  cancelRejection(){
    if (this.forwardRequestId == 0){
      this.router.navigate(['/forwardedRequests']);
    }
    else{
      this.router.navigate(['/managerdashboard']);
    }
    this.router.navigate(['/managerdashboard']);
  }

}
