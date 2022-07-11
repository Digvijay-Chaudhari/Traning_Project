import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { login } from 'src/app/Models/login.model';
import { AuthService } from 'src/app/SharedModule/Services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password:string;
  stored:any;

  loginUrl = environment.loginUrl;
  userInfo :any;
  authenticates:any;
  result:any;


  constructor(private router:Router,private toaster:ToastrService,private authService :AuthService,private http:HttpClient) {
    localStorage.clear();
   }

  ngOnInit(): void {
  }

  loginUser(){
    var loginDetail = new login();
    loginDetail.UserName =this.username;
    loginDetail.Password = this.password;
    this.authService.authenticateUser(loginDetail).subscribe(res=>{
      this.result ==res;
      if (this.result == false) {
          this.toaster.error('Enter correct credantials');
      }
      else{
        this.userInfo = res;
        localStorage.setItem('userData', JSON.stringify(this.userInfo));
        localStorage.setItem('userId',this.userInfo.userDetails.userId);
        localStorage.setItem('managerId',this.userInfo.userDetails.managerId);
        localStorage.setItem('userName',this.userInfo.userDetails.userName);
        localStorage.setItem('isManager',this.userInfo.userDetails.isManager);
        localStorage.setItem('token',this.userInfo.token);
        this.checkRole(this.userInfo);
      }
    })
  }

 

  public checkRole(userinfo:any){
      if(userinfo.userDetails.isManager == false){
        this.toaster.success('login succesfully');
        this.router.navigate(["/landingpage"]);
      }
      else if(userinfo.userDetails.isManager == true){
        this.toaster.success('login succesfully');
        this.router.navigate(["/managerdashboard"]);
      }
  }
}
