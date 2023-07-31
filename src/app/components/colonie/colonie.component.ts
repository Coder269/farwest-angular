import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/services/Services';
import { Timer } from 'src/app/interfaces/Timer';
import { Ressources } from 'src/app/interfaces/ressources';
import { Colonie } from 'src/app/interfaces/colonie';
import { ColonyService } from 'src/app/services/colony.service';
import { RessourceService } from 'src/app/services/ressource.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-colonie',
  templateUrl: './colonie.component.html',
  styleUrls: ['./colonie.component.css']
})
export class ColonieComponent implements OnInit {

  public colonie!: Colonie
  public ressources!: Ressources
  public recolt!: { wood: Date, iron: Date, gold: Date }
  public timer!: { wood: Timer, iron: Timer, gold: Timer }


  constructor(private service: Services, private colonyService: ColonyService, private ressource: RessourceService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    // let coloniyId: number
    // this.colonyService.getColonieById(coloniyId, (response: Colonie) => this.colonie = response)


    this.ressources
    this.recolt = {
      wood: this.service.addSeconds(new Date(), 30),
      iron: this.service.addSeconds(new Date(), 1800),
      gold: this.service.addSeconds(new Date(), 3600)
    } //requette a faire
    console.log(this.recolt);
    //on fait les requettes pour definir les dates!!!
    this.timer = {
      wood: { days: 0, hours: 1, minutes: 0, seconds: 0 },
      iron: { days: 0, hours: 1, minutes: 0, seconds: 0 },
      gold: { days: 0, hours: 1, minutes: 0, seconds: 0 }
    }
    this.service.timer(this.recolt.wood, this.timer.wood)
    this.service.timer(this.recolt.iron, this.timer.iron)
    this.service.timer(this.recolt.gold, this.timer.gold)
  }
}


