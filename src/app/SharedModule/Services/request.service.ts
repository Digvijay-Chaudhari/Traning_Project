import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { BudgetData } from 'src/app/Models/Budgetdata.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

   baseurl =environment.url;

  constructor(private http:HttpClient) { }

  public getAllRequest(){
    return this.http.get<BudgetData[]>(this.baseurl);
  }

  public saveRequest(request:any):Observable<BudgetData>{
      return this.http.post<BudgetData>(this.baseurl,request);
  }

  public deleteRequest(request:any)
  {
    const url=`${this.baseurl}/${request.id}`;
     return this.http.delete(url);
  }

  public getRequestById(id:number){
    const url=`${this.baseurl}/${id}`;
    return this.http.get<BudgetData>(url);
  }

  public updateRequest(request:any,id:number){
    const url=`${this.baseurl}/${id}`;
    return this.http.put<BudgetData>(url,request);
  }

  public decisionRequest(id:number,changes:Partial<BudgetData>):Observable<BudgetData>{
    const url=`${this.baseurl}/${id}`;
    return this.http.put<BudgetData>(url,changes);
  }

  public addComment(id:number,changes:Partial<BudgetData>):Observable<BudgetData>{
    const url=`${this.baseurl}/${id}`;
    return this.http.put<BudgetData>(url,changes);
  }
  
}


