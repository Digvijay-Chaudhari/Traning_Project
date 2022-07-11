import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RequestService } from 'src/app/SharedModule/Services/request.service';

@Component({
  selector: 'app-display-manager-request',
  templateUrl: './display-manager-request.component.html',
  styleUrls: ['./display-manager-request.component.css']
})
export class DisplayManagerRequestComponent implements OnInit {

  budgetRequest:any;
  requestData:FormGroup;
  userID:any;
  managerId!:any;
  userInfo: any;

  constructor(private requestService:RequestService,private router:Router,
              private formBuilder:FormBuilder,private routers:ActivatedRoute,
              private toaster: ToastrService) { }

  ngOnInit(): void {

    this.managerId = localStorage.getItem('managerId');
    this.userID = localStorage.getItem('userId');
    this.requestService.getUserInfoById(this.managerId).subscribe(res=>{
        this.userInfo = res;
        console.log(this.userInfo);
        console.log(this.userInfo.userName);
    });


    this.requestData = this.formBuilder.group({
      requestId:[],
      userId:[this.userID],
      managerId:[this.managerId],
      purpose:['',Validators.required],
      description:['',Validators.required],
     // approver:['',Validators.required],
      estAmount:['',Validators.required],
      advAmount:['',Validators.required],
      requestDate:['',Validators.required],
      requestStatus:[0],
      comments:[null],
      isDeleted:[false]
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


  public attachRequest(request:any){
    this.requestData.patchValue({
      requestId:request.requestId,
      purpose:request.purpose,
      description:request.description,
      estAmount:request.estAmount,
      advAmount:request.advAmount,
      //requestDate:request.requestDate,
      userId:this.userID,
      managerId:this.managerId,
      requestStatus:0,
      isDeleted:false
    })
  }

  public onFormSubmit(request:any){
    this.requestService.updateRequest(request).subscribe(reponse=>{
          console.log(reponse);
          this.toaster.success('Data updated Succesfully');
          this.router.navigate(['/managerRequest'])
    })

  }
}
