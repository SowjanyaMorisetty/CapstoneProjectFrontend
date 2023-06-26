import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bus } from './model/bus';
import { BusDto } from './model/bus-dto';
import { Schedule } from './model/schedule';
import { User } from './model/user';
import { Seat } from './model/seat';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  [x: string]: any;
  loginUrl!:string;
  signupUrl!:string;
  getUrl!:string;
  deleteUrl!:string
  addbusUrl!:string;
  updateUrl!:string;
  addscheduleUrl!:string;
  s1:Schedule[]=[];
  s2:BusDto[]=[];
  // numofseats!:number;


  s:Seat[]=[];

  fare: number=0;

  date: string='';

  seat: Seat[]=[];

  fhault: string='';

  thault: string='';

  numofseats: Array<number>=[];

  scheduleId: number=0;
  regNo:string='';
  
  constructor(private http:HttpClient) {
    this.signupUrl="http://localhost:8080/registerNewUser";
    this.loginUrl="http://localhost:8080/login";
    this.getUrl="http://localhost:8080/users";
    this.addbusUrl="http://localhost:8081/api/v1/buses/bus";
    this.deleteUrl="http://localhost:8081/bus";
    this.updateUrl="http://localhost:8081/api/v1/buses/bus";
    this.addscheduleUrl="http://localhost:8082/api/v1/schedules/schedule";
   }
     signupok(user:User):Observable<any>{
       return this.http.post(this.signupUrl,user);

     }
     loginok(user : User):Observable<any>{
      return this.http.post<any>(this.loginUrl,user);
     }
    addbusok(bus:Bus):Observable<any>{
      return this.http.post(this.addbusUrl,bus);
    }
    // deleteDataById(id:string): Observable<void> {
    //   return this.http.delete<void>(`${this.deleteUrl}/${id}`);
    // }
    updateBus(updatedBus: Bus): Observable<any> {
      return this.http.put(this.addbusUrl,updatedBus);
    }
    getBus(){
      return this.http.get(this.addbusUrl);
    }
    getBusByRegNo(regNo:string){
      return this.http.get(`http://localhost:8081/api/v1/buses/bus/number/${regNo}`);
    }
    search(date: string, source: string, dest: string) {
      return this.http.get(`http://localhost:8082/api/v1/schedules/schedule/${date}/${source}/${dest}`);
    }
    searchbus(date: string, source: string, dest: string) {
      return this.http.get(`http://localhost:8082/api/v1/schedules/schedule/bus/${date}/${source}/${dest}`);
    }
    addschedule(schedule:Schedule):Observable<any>{
      return this.http.post(`http://localhost:8082/api/v1/schedules/schedule/post`,schedule);
    }
    getschedule(){
      return this.http.get(`http://localhost:8082/api/v1/schedules/schedule/get`);
    }
    getfare(date: string, source: string, dest: string) {
      return this.http.get(`http://localhost:8082/api/v1/schedules/schedule/fare/${date}/${source}/${dest}`);
    }
    getDropdownValues(): Observable<string[]> {
      return this.http.get<string[]>('http://localhost:8081/api/v1/buses/routeDetails/all');
    }
    getseats(s: number): Observable<any> {

      return this.http.get(`http://localhost:8082/api/v1/schedules/seat/${s}`);

  }
  }
