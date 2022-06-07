import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RequestService } from 'src/app/SharedModule/Services/request.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  requestData :FormGroup;
  constructor(private formbuilder:FormBuilder,private requestService:RequestService,private router:Router,private toaster:ToastrService) { }

  ngOnInit(): void {

    this.requestData=this.formbuilder.group({
      id:['',Validators.required],
      purpose:['',Validators.required],
      description:['',Validators.required],
      approver:['',Validators.required],
      estimatedCost:['',Validators.required],
      adancedAmount:['',Validators.required],
      plannedDate:['',Validators.required],
      isApproved:[false],
      isRejected:[false]
    })

  }

  public onFormSubmit(form:Form){
      this.requestService.saveRequest(form).subscribe(res =>{
        console.log(res);
        this.toaster.success("Your request saved successfully","hey congrats");
         this.router.navigate(['./myrequest']);
      })
  }

  public refreshPage(){
    window.location.reload();
  }

}
