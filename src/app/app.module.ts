import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommentDialogComponent } from './Components/comment-dialog/comment-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayRequestComponent } from './Components/display-request/display-request.component';
import { LandingpageComponent } from './Components/landingpage/landingpage.component';
import { ManagerDashboardComponent } from './Components/manager-dashboard/manager-dashboard.component';
import { ManagerNavComponent } from './SharedModule/Components/manager-Nav/manager-Nav.component';
import { MyRequestComponent } from './Components/my-request/my-request.component';
import { LoginComponent } from './Components/login/login.component';
import { MaterialModule } from './material/material.module';
import { SearchRequestPipe } from './SharedModule/Pipes/search-request.pipe';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavComponent } from './SharedModule/Components/nav/nav.component';
import { EditManagerRequestComponent } from './Components/edit-manager-request/edit-manager-request.component';
import { ManagerRequestComponent } from './Components/manager-request/manager-request.component';
import { UserRequestComponent } from './SharedModule/Components/user-request/user-request.component';
import { DisplayManagerRequestComponent } from './Components/display-manager-request/display-manager-request.component';
import { AddManagerRequestComponent } from './Components/add-manager-request/add-manager-request.component';
import { ManagerRequestHistoryComponent } from './Components/manager-request-history/manager-request-history.component';
import { UserRequestHistoryComponent } from './Components/user-request-history/user-request-history.component';
import { RejectCommentComponent } from './Components/reject-comment/reject-comment.component';
import { ReporteeRequestHistoryComponent } from './Components/reportee-request-history/reportee-request-history.component';
import { ForwardedRequestsComponent } from './Components/forwarded-requests/forwarded-requests.component';
import { ForwardedCommentDialogComponent } from './Components/forwarded-comment-dialog/forwarded-comment-dialog.component';
import { ForwardedRejectCommentComponent } from './Components/forwarded-reject-comment/forwarded-reject-comment.component';
import { ForwardedRequestHistoryComponent } from './Components/forwarded-request-history/forwarded-request-history.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CommentDialogComponent,
    DisplayRequestComponent,
    LandingpageComponent,
    ManagerDashboardComponent,
    ManagerNavComponent,
    MyRequestComponent,
    SearchRequestPipe,
    NavComponent,
    EditManagerRequestComponent,
    ManagerRequestComponent,
    UserRequestComponent,
    DisplayManagerRequestComponent,
    AddManagerRequestComponent,
    ManagerRequestHistoryComponent,
    UserRequestHistoryComponent,
    RejectCommentComponent,
    ReporteeRequestHistoryComponent,
    ForwardedRequestsComponent,
    ForwardedCommentDialogComponent,
    ForwardedRejectCommentComponent,
    ForwardedRequestHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    NgbModule,
    FlexLayoutModule,
    NgxPaginationModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
