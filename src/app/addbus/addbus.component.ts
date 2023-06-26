import { Component } from '@angular/core';
import { Bus } from '../model/bus';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-addbus',
  templateUrl: './addbus.component.html',
  styleUrls: ['./addbus.component.css']
})
export class AddbusComponent {

  busId!:number;
	busNo!:number;
	regNo:string='';
	
	engineNo!:string;
	busType!:string;
	busName!:string;
	totalSeats!:number;
  bus:Bus=new Bus();

  constructor(private service:ServiceService,private router:Router){}
  addbus(){
    this.bus.busId=this.busId;
    this.bus.busName=this.busName;
    this.bus.busNo=this.busNo;
    this.bus.busType=this.busType;
    this.bus.regNo=this.regNo;
    this.bus.totalSeats=this.totalSeats;
    this.bus.engineNo=this.engineNo;
    this.service.addbusok(this.bus).subscribe(

      response => {

        console.log(response);

        

      }

      );

      alert("Bus Added");

    }
  }


