import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetData } from 'src/app/Models/Budgetdata.model';
import { RequestService } from 'src/app/SharedModule/Services/request.service';
import { SearchRequestPipe } from 'src/app/SharedModule/Pipes/search-request.pipe';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-my-request',
  templateUrl: './my-request.component.html',
  styleUrls: ['./my-request.component.css']
})
export class MyRequestComponent implements OnInit {

  RequestData: BudgetData[];
  searchBox:any ="";

  constructor(private requestService:RequestService,private router:Router,private toaster:ToastrService) { }

  ngOnInit(): void {
        this.requestService.getAllRequest().subscribe(res=>{
        this.RequestData = res;
      })
    
  }

  public deleteRequest(request:BudgetData){
      this.requestService.deleteRequest(request).subscribe(res=>{
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
