import { Component, OnInit } from '@angular/core';
import { BudgetData } from 'src/app/Models/Budgetdata.model';
import { RequestService } from 'src/app/SharedModule/Services/request.service';
import { SearchRequestPipe } from 'src/app/SharedModule/Pipes/search-request.pipe';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-request',
  templateUrl: './my-request.component.html',
  styleUrls: ['./my-request.component.css']
})
export class MyRequestComponent implements OnInit {

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
    this.router.navigate(['/displayrequest',id]);   
  }

  public navigatepage(){
    this.router.navigate(['/landingpage']);
  }

}
