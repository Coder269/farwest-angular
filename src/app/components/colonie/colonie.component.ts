import { Component, OnInit, ViewChild } from '@angular/core';
import { Services } from 'src/app/services/Services';
import { Timer } from 'src/app/interfaces/Timer';
import { Ressources } from 'src/app/interfaces/ressources';
import { Colonie } from 'src/app/interfaces/colonie';
import { RessourceModalComponent } from '../ressource-modal/ressource-modal.component';
import { EquipmentsModalComponent } from '../equipments-modal/equipments-modal.component';

import { RessourceService } from 'src/app/services/ressource.service';
import { ActivatedRoute } from '@angular/router';
import { NgFor } from '@angular/common';
import { MoneyService } from 'src/app/services/money.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/Models/User';
import { ColonyService } from 'src/app/services/colony.service';

@Component({
  selector: 'app-colonie',
  templateUrl: './colonie.component.html',
  styleUrls: ['./colonie.component.css'],
})
export class ColonieComponent implements OnInit {
  public colonie: Colonie = {}
  public ressource: Ressources = {}
  public recolt!: { wood: Date; iron: Date; gold: Date };
  public timer!: { wood: Timer; iron: Timer; gold: Timer };
  public user: User = {};

  constructor(
    private service: Services,
    private ressourceService: RessourceService,
    public moneyService: MoneyService,
    private userService: UserService,
    private route: ActivatedRoute,
    private colonyService: ColonyService
  ) { }

  ngOnInit(): void {
    this.updateAllQueries();

    this.recolt = {
      wood: this.service.addSeconds(new Date(), 30),
      iron: this.service.addSeconds(new Date(), 1800),
      gold: this.service.addSeconds(new Date(), 3600),
    }; //requette a faire
    //on fait les requettes pour definir les dates!!!
    this.timer = {
      wood: { days: 0, hours: 1, minutes: 0, seconds: 0 },
      iron: { days: 0, hours: 1, minutes: 0, seconds: 0 },
      gold: { days: 0, hours: 1, minutes: 0, seconds: 0 },
    };
    this.service.timer(this.recolt.wood, this.timer.wood);
    this.service.timer(this.recolt.iron, this.timer.iron);
    this.service.timer(this.recolt.gold, this.timer.gold);
  }

  @ViewChild(RessourceModalComponent)
  RessourceModal?: RessourceModalComponent;

  async openWoodModal() {
    if (this.RessourceModal) {
      this.RessourceModal.type = 'Wood';
      this.RessourceModal.openModal();
    }
  }

  openIronModal() {
    if (this.RessourceModal) {
      this.RessourceModal.type = 'Iron';
      this.RessourceModal.openModal();
    }
  }

  openGoldModal() {
    if (this.RessourceModal) {
      this.RessourceModal.type = 'Gold';
      this.RessourceModal.openModal();
    }
  }

  @ViewChild(EquipmentsModalComponent)
  EquipmentsModal?: EquipmentsModalComponent;

  openScirieModal() {
    if (this.EquipmentsModal) {
      this.EquipmentsModal.equipment = 'SawMill';
      this.EquipmentsModal.openModal();
    }
  }

  openForgeModal() {
    if (this.EquipmentsModal) {
      this.EquipmentsModal.equipment = 'Forge';
      this.EquipmentsModal.openModal();
    }
  }

  openMineModal() {
    if (this.EquipmentsModal) {
      this.EquipmentsModal.equipment = 'Mine';
      this.EquipmentsModal.openModal();
    }
  }

  buyCowboy(numberOfCowboy: number) {
    console.log(this.ressource);
    for (let i = 0; i < this.moneyService.getCowBoyPrices().qty.length; i++) {
      if (numberOfCowboy == this.moneyService.getCowBoyPrices().qty[i]) {
        let userMoney: number;
        let nbCowBoys;
        this.userService

        this.userService.getUserInfo(localStorage.getItem('userName'), (response: User) => {
          userMoney = response.money ? response.money : 0
          if (userMoney >= this.moneyService.getCowBoyPrices().price[i] && this.ressource.id && this.user.money) {
            this.ressourceService.updateCowboys(this.ressource.id, this.moneyService.getCowBoyPrices().qty[i] + this.ressource.numberOfCowboy!, () => { });
            this.userService.updateMoney(this.user.id!, this.user.money - this.moneyService.getCowBoyPrices().price[i], () => {
              this.updateAllQueries()
            })
          }
          else {

          }
        })
        //verif si assez d'argent
        //->si oui alors : 
        //->requette pour ajouter les cowboys dans ressource
        //->requette pour retirer l'argent
        //sinon : message d'erreur.
      }

    }
  }
  updateAllQueries() {
    let colonyId = this.route.snapshot.paramMap.get('id');
    if (colonyId && this.colonyService && this.userService && this.ressourceService) {
      this.colonyService.getColonieById(
        parseInt(colonyId),
        (response: Colonie) => { this.colonie = response }
      );
      this.ressourceService.getRessourceOfColony(
        parseInt(colonyId),
        (response: Ressources) => {
          this.ressource = response;
        }
      );
      let userName = localStorage.getItem('userName')
      if (userName) {
        this.userService.getUserInfo(
          userName, (response: User) => {
            this.user = response
          }

        )
      }

    }
  }

}
function log(colonie: Colonie) {
  throw new Error('Function not implemented.');
}


