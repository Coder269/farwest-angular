import { Injectable } from '@angular/core';
import { Timer } from '../interfaces/Timer';
import { Colonie } from '../interfaces/colonie';
import { ActivatedRoute, Router } from '@angular/router';
import { Ressources } from '../interfaces/ressources';
import { User } from '../Models/User';
import { ColonyService } from './colony.service';
import { UserService } from './user.service';
import { RessourceService } from './ressource.service';

@Injectable({
  providedIn: 'root',
})
export class Services {
  constructor(
    public colonyService?: ColonyService,
    public userService?: UserService,
    public ressourceService?: RessourceService
  ) { }

  //update the count down in every 1 second
  public timer(date: number, timer: Timer, nbSec: number) {
    date = date + nbSec * 1000;
    setInterval(function () {
      // get the today's date and time
      let now = new Date().getTime();


      //find the difference b/w countDown and now
      let diff = date - now;

      //now we are calculating time in days, hrs, minutes, and seconds.
      timer.days = Math.floor(diff / (3600 * 24 * 1000)); //days
      timer.hours = Math.floor(
        (diff % (3600 * 24 * 1000)) / (1000 * 60 * 60)
      ); //hrs

      timer.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)); //min,
      //console.log(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)))
      timer.seconds = Math.floor((diff % (1000 * 60)) / 1000); //sec
      console.log(timer)
      //now output the result in an element with id ="time"
    }, 1000);
  }

  public colonieList: Array<{ colonyName: String, colonyPicture: String }> = [
    { colonyName: 'colony 1', colonyPicture: `../../assets/village1.jpg` },
    { colonyName: 'colony 2', colonyPicture: `../../assets/village2.jpg` },
    { colonyName: 'colony 3', colonyPicture: `../../assets/village3.jpg` },
    { colonyName: 'colony 4', colonyPicture: `../../assets/village4.jpg` },
    { colonyName: 'colony 5', colonyPicture: `../../assets/village5.jpg` },
    { colonyName: 'colony 6', colonyPicture: `../../assets/village6.jpg` },
    { colonyName: 'colony 7', colonyPicture: `../../assets/village7.jpg` },
  ];

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
    if (localStorage.getItem('isLoggedIn') == 'true') {
      status = true;
    } else {
      status = false;
    }
    return status;
  }

  public getRandomColonies(count: number): Array<{ colonyName: String, colonyPicture: String }> {
    const randomColonies = new Array<{ colonyName: String, colonyPicture: String }>;
    const allColonies = this.colonieList.slice();

    while (randomColonies.length < count && allColonies.length > 0) {
      const randomIndex = Math.floor(Math.random() * allColonies.length);
      const randomColony = allColonies.splice(randomIndex, 1)[0];
      randomColonies.push(randomColony);
    }

    return randomColonies;
  }
}
