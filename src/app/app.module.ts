import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { SeatavailabilityComponent } from './seatavailability/seatavailability.component';

import { FormsModule } from '@angular/forms';
import { ServiceService } from './service.service';
import { HttpClientModule } from '@angular/common/http';
import { MainhomepageComponent } from './Adminhomepage/mainhomepage.component';

import { AddpassengerdetailsforbookingComponent } from './addpassengerdetailsforbooking/addpassengerdetailsforbooking.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { FootersComponent } from './footers/footers.component';
import { TicketComponent } from './ticket/ticket.component';
import { AddbusComponent } from './addbus/addbus.component';
import { UpdatebusComponent } from './updatebus/updatebus.component';
import { ViewbusComponent } from './viewbus/viewbus.component';
import { ViewscheduleComponent } from './viewschedule/viewschedule.component';
import { AddscheduleComponent } from './addschedule/addschedule.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AddpassengerdetailsforbookingComponent,
    MainhomepageComponent,
    FootersComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    SearchpageComponent,
    SeatavailabilityComponent,
    ServicesComponent,
    SignupComponent,
    TicketComponent,
    AddbusComponent,
    UpdatebusComponent,
    ViewbusComponent,
    ViewscheduleComponent,
    AddscheduleComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
