import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseurl = environment.requestUrl;
  userUrl = environment.userInfoUrl;
  requesturl = environment.requestDetailUrl;
  frwdRequestUrl = environment.frwdRequestUrl;
  tokens: any = localStorage.getItem('token')

  constructor(private http: HttpClient) { }

  public getAllRequestByStatus(id: Number, status: Number) {
    const reqUrl = "https://localhost:44381/api/RequestDetail";
    const url = `${reqUrl}/${id}/${status}`;
    return this.http.get(url);
  }

  public getUserInfoById(id: any) {
    const url = `${this.userUrl}/${id}`;
    return this.http.get(url);
  }

  public saveRequest(request: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `bearer ${this.tokens}`
    })
    const url = "https://localhost:44381/api/RequestDetail"
    return this.http.post<any>(url, request, { headers });
  }

  public deleteRequest(id: any) {
    const delteUrl = "https://localhost:44381/api/RequestDetail/DeleteRequest";
    const url = `${delteUrl}/${id}`;
    return this.http.delete(url);
  }

  public getRequestById(id: number) {
    const reqUrl = "https://localhost:44381/api/RequestDetail";
    const url = `${reqUrl}/${id}`;
    return this.http.get(url);
  }

  public updateRequest(request: any) {
    const updateUrl = "https://localhost:44381/api/RequestDetail";
    return this.http.put(updateUrl, request);
  }

  public GetRequestByMangerId(id: number) {
    const reqUrl = "https://localhost:44381/api/RequestDetail/GetRequestByMangerId";
    const url = `${reqUrl}/${id}`;
    return this.http.get(url);
  }

  public GetHistoryOfRequestByUserId(id: number) {
    const reqUrl = "https://localhost:44381/api/RequestDetail/GetHistoryOfRequestByUserId";
    const url = `${reqUrl}/${id}`;
    return this.http.get(url);
  }

  public RequestDecisonByManager(id: Number, status: Number) {
    const url = `${this.requesturl}/${id}/${status}`;
    return this.http.put(url, status);
  }

  public RejectionComment(id: Number, comment: string) {
    const reqUrl = "https://localhost:44381/api/RequestDetail/RejectionCommentByManager";
    const url = `${reqUrl}/${id}/${comment}`;
    return this.http.put(url, comment);
  }

  public GetRequestByStatusAndManagerID(id: Number, status: Number) {
    const reqUrl = "https://localhost:44381/api/RequestDetail/GetRequestByStatusAndManagerID";
    const url = `${reqUrl}/${id}/${status}`;
    return this.http.get(url);
  }

  public saveForwordedRequest(request: any): Observable<any> {
    const url = "https://localhost:44381/api/RequestDetail"
    return this.http.post<any>(url, request);
  }

  public AddForwardedRequest(request: any) {
    const url = "https://localhost:44381/api/ForwardedRequest"
    return this.http.post<any>(url, request);
  }

  public GetForwadedRequests(id: Number, status: Number) {
    const reqUrl = "https://localhost:44381/api/ForwardedRequest";
    const url = `${reqUrl}/${id}/${status}`;
    return this.http.get(url);
  }

  public RequestDecisonBySupManager(id: Number, status: Number) {
    const url = `${this.frwdRequestUrl}/${id}/${status}`;
    return this.http.put(url, status);
  }

  public getForwardedRequestById(id: number) {
    const url = `${this.frwdRequestUrl}/${id}`;
    return this.http.get(url);
  }

  public forwardedRejectionCommentByManager(id: Number, comment: string) {
    const reqUrl = "https://localhost:44381/api/ForwardedRequest/RejectionCommentByManager";
    const url = `${reqUrl}/${id}/${comment}`;
    return this.http.put(url, comment);
  }
  
}


