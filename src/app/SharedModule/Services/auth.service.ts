import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private _toasterService : ToastrService,private router:Router) { }
  loginUrl = environment.loginUrl;
  userInfo :any;
  authenticates:any;
  result:any;


  public authenticateUser(login:any){
    return this.http.post(this.loginUrl,login);
  }

}
