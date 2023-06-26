import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Seat } from '../model/seat';

@Component({
  selector: 'app-seatavailability',
  templateUrl: './seatavailability.component.html',
  styleUrls: ['./seatavailability.component.css']
})
export class SeatavailabilityComponent  {
  seat: Seat[] = this.demosearch.seat;
  fhault: string = this.demosearch.fhault;
  thault: string = this.demosearch.thault;
  fare: number = this.demosearch.fare;
  date: String = this.demosearch.date;
  seats:any = [];
  n:number = 0;
  seatNo:number = 0
  bookedSeats:Array<number> = [];
  constructor(private demosearch:ServiceService) {

    this.seats = Array(40).fill('available');

    setInterval(() => this.process(), 100);
}
 
  ngOnInit()
  {
    this.process()
  }
  process(): void {

    console.log(this.demosearch.seat)

    this.seat = this.demosearch.seat
 this.seat.forEach((s, i) => {
 if (s.fHault===this.fhault &&s.tHault===this.thault &&s.status===1) {
  this.seats[s.seatNo - 1] = 'booked'

      };
 });

  }
toggleSeatStatus(index: number) {
    if (this.seats[index] === 'booked') {
        return;
    }

    if (this.seats[index] === 'available') {

      console.log(this.seat);
  this.seats[index] = 'temporarily-booked';

      this.seatNo = this.seatNo + 1;

      this.bookSeats(index + 1);

      if (this.seatNo > 5) {

        alert("MAXIMUM NUMBER OF SEATS CAN BE BOOKED AT A TIME EXCEEDED!!!!")

        this.seatNo = this.seatNo - 1;

        this.seats[index] = 'available';

        this.unbookSeats(index + 1);

        console.log(this.bookedSeats)

      }


    } else {
 this.seats[index] = 'available';

      this.seatNo = this.seatNo - 1;

      this.unbookSeats(index + 1);

    }

  }
 public bookSeats(index: number) {

    this.bookedSeats.push(index);

  }
public unbookSeats(ind: number) {

    let index = this.bookedSeats.indexOf(ind);

    this.bookedSeats.splice(index, 1)

  }

  set() {

    this.bookedSeats.sort((a, b) => a - b);

    this.demosearch.numofseats = this.bookedSeats;
    console.log(this.demosearch.numofseats);

  }

}







