import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-viewschedule',
  templateUrl: './viewschedule.component.html',
  styleUrls: ['./viewschedule.component.css']
})
export class ViewscheduleComponent {
  constructor(private service:ServiceService){this.getschedule();}


  schedule: any;
  getschedule(){
    this.service.getschedule().subscribe(
      response => {
        this.schedule = response;
        console.log(this.schedule);
        
        
      }
    )
  }

}
