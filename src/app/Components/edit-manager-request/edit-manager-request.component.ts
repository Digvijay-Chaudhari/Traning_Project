import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RequestService } from 'src/app/SharedModule/Services/request.service';

@Component({
  selector: 'app-edit-manager-request',
  templateUrl: './edit-manager-request.component.html',
  styleUrls: ['./edit-manager-request.component.css']
})
export class EditManagerRequestComponent implements OnInit {

  requestData :FormGroup;
  userID:any;
  managerId!:any;
  userInfo: any;

  constructor(private formbuilder:FormBuilder,private requestService:RequestService,private router:Router,private toaster:ToastrService) { }

  ngOnInit(): void {

    this.managerId = localStorage.getItem('managerId');
    this.userID = localStorage.getItem('userId');
    this.requestService.getUserInfoById(this.managerId).subscribe(res=>{
        this.userInfo = res;
        console.log(this.userInfo);
        console.log(this.userInfo.userName);
    });

    this.requestData=this.formbuilder.group({
      purpose:['',Validators.required],
      description:['',Validators.required],
      //approver:['',Validators.required],
      managerId:[this.managerId],
      userId:[this.userID],
      estAmount:['',Validators.required],
      advAmount:['',Validators.required],
      requestDate:['',Validators.required],
      requestStatus:[0],
      comments:[null],
      isDeleted:[false]
    });

  

  }

  public onFormSubmit(form:Form){
      this.requestService.saveRequest(form).subscribe(res =>{
        console.log(res);
        this.toaster.success("Your Updated request successfully","hey congrats");
         this.router.navigate(['./managerdashboard']);
      })
  }

  public refreshPage(){
    window.location.reload();
  }

}
