import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrialComponent } from './Components/trial/trial.component';
import { CommentDialogComponent } from './Components/comment-dialog/comment-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayRequestComponent } from './Components/display-request/display-request.component';
import { HeaderComponent } from './Components/header/header.component';
import { LandingpageComponent } from './Components/landingpage/landingpage.component';
import { ManagerDashboardComponent } from './Components/manager-dashboard/manager-dashboard.component';
import { ManagerNavComponent } from './SharedModule/manager-Nav/manager-Nav.component';
import { MyRequestComponent } from './Components/my-request/my-request.component';
import { ReportActionComponent } from './Components/report-action/report-action.component';
import { TestingComponent } from './Components/testing/testing.component';
import { ViewhistoryComponent } from './Components/viewhistory/viewhistory.component';
import { LoginComponent } from './Components/login/login.component';
import { MaterialModule } from './material/material.module';
import { SearchRequestPipe } from './SharedModule/Pipes/search-request.pipe';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavComponent } from './SharedModule/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TrialComponent,
    CommentDialogComponent,
    DisplayRequestComponent,
    HeaderComponent,
    LandingpageComponent,
    ManagerDashboardComponent,
    ManagerNavComponent,
    MyRequestComponent,
    ReportActionComponent,
    TestingComponent,
    ViewhistoryComponent,
    SearchRequestPipe,
    NavComponent
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
    FlexLayoutModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
