import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddManagerRequestComponent } from './Components/add-manager-request/add-manager-request.component';
import { DisplayManagerRequestComponent } from './Components/display-manager-request/display-manager-request.component';
import { DisplayRequestComponent } from './Components/display-request/display-request.component';
import { EditManagerRequestComponent } from './Components/edit-manager-request/edit-manager-request.component';
import { ForwardedCommentDialogComponent } from './Components/forwarded-comment-dialog/forwarded-comment-dialog.component';
import { ForwardedRejectCommentComponent } from './Components/forwarded-reject-comment/forwarded-reject-comment.component';
import { ForwardedRequestHistoryComponent } from './Components/forwarded-request-history/forwarded-request-history.component';
import { ForwardedRequestsComponent } from './Components/forwarded-requests/forwarded-requests.component';
import { LandingpageComponent } from './Components/landingpage/landingpage.component';
import { LoginComponent } from './Components/login/login.component';
import { ManagerDashboardComponent } from './Components/manager-dashboard/manager-dashboard.component';
import { ManagerRequestHistoryComponent } from './Components/manager-request-history/manager-request-history.component';
import { ManagerRequestComponent } from './Components/manager-request/manager-request.component';
import { MyRequestComponent } from './Components/my-request/my-request.component';
import { RejectCommentComponent } from './Components/reject-comment/reject-comment.component';
import { ReporteeRequestHistoryComponent } from './Components/reportee-request-history/reportee-request-history.component';
import { UserRequestHistoryComponent } from './Components/user-request-history/user-request-history.component';
import { ManagerNavComponent } from './SharedModule/Components/manager-Nav/manager-Nav.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch: 'full'},
  {path:'managerlanding',component:ManagerNavComponent},
  {path:'displayrequest/:id',component:DisplayRequestComponent},
  {path:'myrequest',component:MyRequestComponent},
  {path:'landingpage',component:LandingpageComponent},
  {path:'managerdashboard',component:ManagerDashboardComponent},
  {path:'managerRequest',component:ManagerRequestComponent},
  {path:'editManager',component:EditManagerRequestComponent},
  {path:'displayManagerRequest/:id',component:DisplayManagerRequestComponent},
  {path:'addmanagerRequest',component:AddManagerRequestComponent},
  {path:'userRequestHistory',component:UserRequestHistoryComponent},
  {path:'managerRequestHistory',component:ManagerRequestHistoryComponent},
  {path:'rejectComment/:requestId/:forwardId',component:RejectCommentComponent},
  {path:'reporteeHistory',component:ReporteeRequestHistoryComponent},
  {path:'forwardedRequests',component:ForwardedRequestsComponent},
  {path:'forwardedCommentDialog',component:ForwardedCommentDialogComponent},
  {path:'forwardedRejectComment',component:ForwardedRejectCommentComponent},
  {path:'forwardedRequesthistary',component:ForwardedRequestHistoryComponent},
  {path:'login', component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
