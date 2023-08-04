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
  public colonie!: Colonie;
  public ressource!: Ressources;
  public recolt!: { wood: number; iron: number; gold: number };
  public ressourceToRecolt!: { wood: number; iron: number; gold: number };
  public timer!: { wood: Timer; iron: Timer; gold: Timer };
  public user!: User;
  private colonyId!: string | null;

  constructor(
    private service: Services,
    private ressourceService: RessourceService,
    public moneyService: MoneyService,
    private userService: UserService,
    private route: ActivatedRoute,
    private colonyService: ColonyService
  ) {}

  ngOnInit(): void {
    this.colonyId = this.route.snapshot.paramMap.get('id');
    this.updateAllQueries();
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
    for (let i = 0; i < this.moneyService.getCowBoyPrices().qty.length; i++) {
      if (numberOfCowboy == this.moneyService.getCowBoyPrices().qty[i]) {
        let userMoney: number;
        let nbCowBoys;
        this.userService;

        this.userService.getUserInfo(
          localStorage.getItem('userName'),
          (response: User) => {
            userMoney = response.money ? response.money : 0;
            if (
              userMoney >= this.moneyService.getCowBoyPrices().price[i] &&
              this.ressource.id &&
              this.user.money
            ) {
              this.ressourceService.updateCowboys(
                this.ressource.id,
                this.moneyService.getCowBoyPrices().qty[i] +
                  this.ressource.numberOfCowboy!,
                () => {}
              );
              this.userService.updateMoney(
                this.user.id!,
                this.user.money - this.moneyService.getCowBoyPrices().price[i],
                () => {
                  this.updateAllQueries();
                }
              );
            } else {
            }
          }
        );
      }
    }
  }

  recoltRessource(ressource: string) {
    switch (ressource) {
      case 'wood':
        if (
          this.ressource.id &&
          this.timer.wood.hours + this.timer.wood.minutes < 0
        ) {
          this.ressourceService.updateWood(
            this.ressource.id,
            this.ressource.wood +
              this.ressourceService
                .exportTools()
                .sawMill.returnProductivity(this.ressource.sawMill),
            () => {
              this.colonie.woodLastRecolt = new Date().getTime();
              this.colonyService.updateColony(this.colonie, () => {
                this.updateAllQueries();
              });
            }
          );
        }
        break;
      case 'iron':
        if (
          this.ressource.id &&
          this.timer.iron.hours + this.timer.iron.minutes < 0
        ) {
          this.ressourceService.updateIron(
            this.ressource.id,
            this.ressource.iron +
              this.ressourceService
                .exportTools()
                .forge.returnProductivity(this.ressource.forge),
            () => {
              this.colonie.ironLastRecolt = new Date().getTime();
              this.colonyService.updateColony(this.colonie, () => {
                this.updateAllQueries();
              });
            }
          );
        }
        break;
      case 'gold':
        if (
          this.ressource.id &&
          this.timer.gold.hours + this.timer.gold.minutes < 0
        ) {
          this.ressourceService.updateGold(
            this.ressource.id,
            this.ressource.gold +
              this.ressourceService
                .exportTools()
                .mine.returnProductivity(this.ressource.mine),
            () => {
              this.colonie.goldLastRecolt = new Date().getTime();
              this.colonyService.updateColony(this.colonie, () => {
                this.updateAllQueries();
              });
            }
          );
        }
    }
  }

  updateAllQueries() {
    if (
      this.colonyId &&
      this.colonyService &&
      this.userService &&
      this.ressourceService
    ) {
      this.colonyService.getColonieById(
        parseInt(this.colonyId),
        (response: Colonie) => {
          this.colonie = response;
          this.recolt = {
            wood: this.colonie.woodLastRecolt,
            iron: this.colonie.ironLastRecolt,
            gold: this.colonie.goldLastRecolt,
          };
          this.timer = {
            wood: { days: 0, hours: 0, minutes: 0, seconds: 0 },
            iron: { days: 0, hours: 0, minutes: 0, seconds: 0 },
            gold: { days: 0, hours: 0, minutes: 0, seconds: 0 },
          };

          this.service.timer(this.recolt.wood, this.timer.wood, 3600 * 3);
          this.service.timer(this.recolt.iron, this.timer.iron, 3600 * 3);
          this.service.timer(this.recolt.gold, this.timer.gold, 3600 * 3);
        }
      );
      this.ressourceService.getRessourceOfColony(
        parseInt(this.colonyId),
        (response: Ressources) => {
          this.ressource = response;
        }
      );
      let userName = localStorage.getItem('userName');
      if (userName) {
        this.userService.getUserInfo(userName, (response: User) => {
          this.user = response;
        });
      }
    }
  }
}
