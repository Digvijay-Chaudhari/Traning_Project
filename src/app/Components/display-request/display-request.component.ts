import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BudgetData } from 'src/app/Models/Budgetdata.model';
import { RequestService } from 'src/app/SharedModule/Services/request.service';

@Component({
  selector: 'app-display-request',
  templateUrl: './display-request.component.html',
  styleUrls: ['./display-request.component.css']
})
export class DisplayRequestComponent implements OnInit {

  budgetRequest:BudgetData;
  requestData:FormGroup;

  constructor(private requestService:RequestService,private router:Router,private formBuilder:FormBuilder,private routers:ActivatedRoute,private toaster: ToastrService) { }

  ngOnInit(): void {

    this.requestData = this.formBuilder.group({
      id:[],
      purpose:['',Validators.required],
      description:['',Validators.required],
      approver:['',Validators.required],
      estimatedCost:['',Validators.required],
      adancedAmount:['',Validators.required],
      plannedDate:['',Validators.required],
      isApproved:[false],
      isRejected:[false]
    })

    this.getRequest(this.routers.snapshot.params['id']);

  }

  public getRequest(id:number){
      this.requestService.getRequestById(id).subscribe(res=>{
        this.budgetRequest=res;
        console.log(this.budgetRequest);
        this.attachRequest(res);
      })
  }


  public attachRequest(request:BudgetData){
    this.requestData.patchValue({
      id:request.id,
      purpose:request.purpose,
      description:request.description,
      approver:request.approver,
      estimatedCost:request.estimatedCost,
      adancedAmount:request.adancedAmount,
      plannedDate:request.plannedDate,
      isApproved:false,
      isRejected:false
    })
  }

  public onFormSubmit(request:BudgetData){
    this.requestService.updateRequest(request,request.id).subscribe(reponse=>{
          console.log(reponse);
          this.toaster.success('Data updated Succesfully');
          this.router.navigate(['/myrequest'])
    })

  }

}
