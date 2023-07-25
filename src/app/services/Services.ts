import { Injectable } from '@angular/core';
import { Timer } from '../interfaces/Timer';


@Injectable({
  providedIn: 'root'
})
export class Services {

  constructor() { }


  //update the count down in every 1 second
  public timer(dateToReach: Date, timer: Timer) {
    setInterval(function () {
      // get the today's date and time
      var now = new Date().getTime();

      //find the difference b/w countDown and now
      var diff = dateToReach.getTime() - now;

      //now we are calculating time in days, hrs, minutes, and seconds.
      timer.days = Math.floor(diff / (1000 * 60 * 60 * 24)); //days
      timer.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); //hrs


      timer.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)); //min,
      //console.log(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)))
      timer.seconds = Math.floor((diff % (1000 * 60)) / 1000); //sec

      //now output the result in an element with id ="time"
    }, 1000);
  }
  public addSeconds(date: Date, nbSeconds: number): Date {
    let dateModified: Date = new Date();
    dateModified.setTime(date.getTime() + nbSeconds * 1000)
    return dateModified
  }
}
