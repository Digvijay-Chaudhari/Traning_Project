import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayRequestComponent } from './Components/display-request/display-request.component';
import { LandingpageComponent } from './Components/landingpage/landingpage.component';
import { LoginComponent } from './Components/login/login.component';
import { ManagerDashboardComponent } from './Components/manager-dashboard/manager-dashboard.component';
import { MyRequestComponent } from './Components/my-request/my-request.component';
import { TestingComponent } from './Components/testing/testing.component';
import { ViewhistoryComponent } from './Components/viewhistory/viewhistory.component';
import { ManagerNavComponent } from './SharedModule/manager-Nav/manager-Nav.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch: 'full'},
  {path:'managerlanding',component:ManagerNavComponent},
  {path:'viewhistory',component:ViewhistoryComponent},
  {path:'displayrequest/:id',component:DisplayRequestComponent},
  {path:'testing',component:TestingComponent},
  {path:'myrequest',component:MyRequestComponent},
  {path:'landingpage',component:LandingpageComponent},
  {path:'managerdashboard',component:ManagerDashboardComponent},
  {path:'login', component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
