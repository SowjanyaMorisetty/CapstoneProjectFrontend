class PassengerDto {

    public name: string;

    public email: string;

    public mobileNo: string;

    public age: number;

    public gender: string;

 

    constructor(

      name: string,

      email: string,

      mobileNo: string,

      age: number,

      gender: string

    ) {

      this.name = name;

      this.email = email;

      this.mobileNo = mobileNo;

      this.age = age;

      this.gender = gender;

    }

  }

 

  class RequestDto {

    public source: string;

    public destination: string;

    public scheduleId: number;

    public userId: number;

    public tickets: number;

    public fare: number;

    public date: string;

    public seatNoList: number[];

    public passengerDtoList: PassengerDto[];

 

    constructor(

      source: string,

      destination: string,

      scheduleId: number,

      userId: number,

      tickets: number,

      fare: number,

      date: string,

      seatNoList: number[],

      passengerDtoList: PassengerDto[]

    ) {

      this.source = source;

      this.destination = destination;

      this.scheduleId = scheduleId;

      this.userId = userId;

      this.tickets = tickets;

      this.fare = fare;

      this.date = date;

      this.seatNoList = seatNoList;

      this.passengerDtoList = passengerDtoList;

    }

  }

 

  export { RequestDto, PassengerDto };