import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {HomeComponent} from './home/home.component'
import { DummyComponent } from './dummy/dummy.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import {AuthGuard} from './auth.guard'

const routes: Routes = [
  { path: '', component: HomeComponent,
children:[
  {
     path: '', component: DummyComponent,
children:[{path:'',component:DynamicComponent}]
 },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent }
] },
{path: 'userdashboard',component: UserdashboardComponent,canActivate:[AuthGuard]},
{path: 'admindashboard',component: AdmindashboardComponent,canActivate:[AuthGuard]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
