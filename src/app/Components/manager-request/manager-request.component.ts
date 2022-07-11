import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RequestService } from 'src/app/SharedModule/Services/request.service';

@Component({
  selector: 'app-manager-request',
  templateUrl: './manager-request.component.html',
  styleUrls: ['./manager-request.component.css']
})
export class ManagerRequestComponent implements OnInit {

  RequestData: any;
  searchBox:any ="";
  userId:any;
  status:Number;
  p: number = 1;
  
  constructor(private requestService:RequestService,private router:Router,private toaster:ToastrService) { }

  ngOnInit(): void {

        this.userId = localStorage.getItem('userId');
        this.requestService.getAllRequestByStatus(this.userId,0).subscribe(res=>{
        this.RequestData = res;
        console.log(res);
      })
    
  }

  public deleteRequest(id:any){
      this.requestService.deleteRequest(id).subscribe(res=>{
        console.log(res);
        this.toaster.success('request deleted succesfully');
        this.router.navigate(['/myrequest']);
        window.location.reload();
      })
  }

  public displayRequest(id:number){
    console.log(id);
    this.router.navigate(['/displayManagerRequest',id]);   
  }

  public navigatepage(){
    this.router.navigate(['/addmanagerRequest']);
  }

}
