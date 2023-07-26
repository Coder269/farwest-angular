import { Injectable } from '@angular/core';
import { Timer } from '../interfaces/Timer';
import { Colonie } from '../interfaces/colonie';
import { Router } from '@angular/router';


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
  public colonieList: Array<Colonie> = [
    { colonyName: "colony 1", colonyPicture: `../../assets/village1.jpg` },
    { colonyName: "colony 2", colonyPicture: `../../assets/village2.jpg` },
    { colonyName: "colony 3", colonyPicture: `../../assets/village3.jpg` },
    { colonyName: "colony 4", colonyPicture: `../../assets/village4.jpg` },
    { colonyName: "colony 5", colonyPicture: `../../assets/village5.jpg` },
    { colonyName: "colony 6", colonyPicture: `../../assets/village6.jpg` },
    { colonyName: "colony 7", colonyPicture: `../../assets/village7.jpg` },

  ]

  public avatarList = [
    '../../assets/cowboy1.png',
    '../../assets/cowgirl1.png',
    '../../assets/cowboy2.png',
    '../../assets/cowgirl2.png',
    '../../assets/cowboy3.png',
    '../../assets/cowgirl3.png',
    '../../assets/cowboy4.png',
    '../../assets/cowboy5.png',
  ];

  public isLoggedIn(): boolean {
    let status = false;
    if (localStorage.getItem('isLoggedIn') == "true") {
      status = true;
    }
    else {
      status = false;
    }
    return status;
  }
}
