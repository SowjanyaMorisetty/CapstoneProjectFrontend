import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainhomepageComponent } from './Adminhomepage/mainhomepage.component';
// import { PassengerdetailsComponent } from './passengerdetails/passengerdetails.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { SeatavailabilityComponent } from './seatavailability/seatavailability.component';
import { SignupComponent } from './signup/signup.component';

import { AddpassengerdetailsforbookingComponent } from './addpassengerdetailsforbooking/addpassengerdetailsforbooking.component';
import { TicketComponent } from './ticket/ticket.component';
import { AddbusComponent } from './addbus/addbus.component';
import { UpdatebusComponent } from './updatebus/updatebus.component';
import { ViewbusComponent } from './viewbus/viewbus.component';
import { ViewscheduleComponent } from './viewschedule/viewschedule.component';
import { AddscheduleComponent } from './addschedule/addschedule.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"seatavailability",
    component:SeatavailabilityComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  // {
  //   path:"deletebus",
  //   component:DeletebusComponent
  // },
  // {
  //   path:"dashboard",
  //   component:DashboardComponent
  // },
  {
    path:"addbus",
    component:AddbusComponent
  },
  // {
  //   path:"buspage",
  //   component:AdminhomepageComponent
  // },
  // {
  //   path:"passengerdetails",
  //   component:PassengerdetailsComponent
  // },
  {
    path:"updatebus",
    component:UpdatebusComponent
  },
  {
    path:"viewbus",
    component:ViewbusComponent
  },
  {
    path:"searchpage",
    component:SearchpageComponent
  },
  {
    path:"mainhomepage",
    component:MainhomepageComponent
  },
  // {
  //   path:"schedulepage",
  //   component:ScheduleComponent
  // },
  {
    path:"addschedule",
    component:AddscheduleComponent
  },
  {
       path:"viewschedule",
       component:ViewscheduleComponent
  },
  {
    path:"ticket",
    component:TicketComponent
  },
  
  {
    path:"bookingdetails",
    component:AddpassengerdetailsforbookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
