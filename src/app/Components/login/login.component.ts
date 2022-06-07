import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password:string;

  constructor(private router:Router,private toaster:ToastrService) { }

  ngOnInit(): void {
  }

  loginUser(){
    if(this.username =="Digvijay" && this.password =="12345"){
      console.warn(this.username,this.password);
      this.router.navigate(["/landingpage"]);
    }
    else if(this.username =="Shubham" && this.password =="12345"){
      console.warn(this.username,this.password);
      this.router.navigate(["/managerdashboard"]);
    }
    else{
        this.toaster.error('Please Enter Proper UserName & Password')
    }
   
  }

}
