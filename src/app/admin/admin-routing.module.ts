import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';
import { BusinessesComponent } from './businesses/businesses.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:"",component:LandingComponent, children:[
    {path:"businesses", component:BusinessesComponent},
    {path:"users/:businessid", component:UsersComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
