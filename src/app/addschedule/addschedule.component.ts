import { Component } from '@angular/core';
import { Schedule } from '../model/schedule';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addschedule',
  templateUrl: './addschedule.component.html',
  styleUrls: ['./addschedule.component.css']
})
export class AddscheduleComponent {



    scheduleId: number=0;
    date: string | undefined;
    departureTime: string | undefined;
    arrivalTime: string | undefined;
    routeId: number | undefined;
    busId: number | undefined;
    schedule:Schedule=new Schedule(); 

  constructor(private service:ServiceService,private router:Router){}
    addschedule(){
      this.schedule.scheduleId=this.scheduleId;
      this.schedule.date=this.date;
      this.schedule.departureTime=this.departureTime;
      this.schedule.arrivalTime=this.arrivalTime;
      this.schedule.routeId=this.routeId;
      this.schedule.busId=this.busId;

      this.service.addschedule(this.schedule).subscribe(

        response => {
  
          console.log(response);
  
          
  
        }
  
        );
  
        alert("Schedule Added");
    }

}
