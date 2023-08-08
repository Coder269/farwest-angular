import { Colonie } from 'src/app/interfaces/colonie';
import { Ressources } from 'src/app/interfaces/ressources';
import { User } from 'src/app/Models/User';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ColonyService } from 'src/app/services/colony.service';
import { ResultModalComponent } from '../result-modal/result-modal.component';
import { AudioService } from 'src/app/services/audio.service';
import { RessourceService } from 'src/app/services/ressource.service';

@Component({
  selector: 'app-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.css'],
})
export class AttackComponent implements OnInit, OnDestroy {
  ressources!: Ressources;
  colony!: Colonie
  user!: User

  numberOfCowboy: number = 0;
  costOfCowboy: number = 100;



  constructor(
    private colonyService: ColonyService,
    private ressourceService: RessourceService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private audioService: AudioService,
  ) { }

  ngOnInit(): void {
    this.audioService.stop();
    this.audioService.playAttackSound();


    console.log(this.route.snapshot.params['id']);

    const userName = localStorage.getItem('userName')
    if (userName) {
      this.userService.getUserInfo(userName, (user: User) => this.user = user)
    }

    const colonyId = this.route.snapshot.paramMap.get('id');
    if (colonyId) {
      this.colonyService.getColonieById(parseInt(colonyId), (colony: Colonie) => this.colony = colony);
      this.ressourceService.getRessourceOfColony(parseInt(colonyId), (ressources: Ressources) => this.ressources = ressources)
    }


  }
  //METHOD TO STOP MUSIC
  ngOnDestroy(): void {
    this.audioService.stopAttackSound();
  }

  async attack() {
    let attackCost = this.numberOfCowboy * this.costOfCowboy

    if (this.user.money != undefined && attackCost > this.user.money) {
      return
    }
    else {
      if (this.user.id != undefined && this.user.money != undefined && this.ressources.id != undefined && this.ressources.numberOfCowboy != undefined) {
        this.user.money -= attackCost
        this.userService.updateMoney(this.user.id, this.user.money, () => { })
        let cowboyLeft = this.ressources.numberOfCowboy - this.numberOfCowboy;
        cowboyLeft < 0 ? cowboyLeft = 0 : true
        this.ressourceService.updateCowboys(this.ressources.id, cowboyLeft, () => { })
        if (cowboyLeft == 0) {
          this.colony.user = this.user
          this.colonyService.updateColony(this.colony, () => { })
          this.openWinModal()
          console.log("gagné");

        }
        else {
          this.openLostModal()
          console.log("perdu");
        }
      }
      //requette pr soustraire les cowboys à la colonie => 
      //dans la callback : 
      //si nb cowboy <=0, on initialise la colonie à 0 et on change le userId, et on envoie la modal de victoire
      //sinon on soustrait les cowboys à la colonie, et on envoie la modal de defaite

    }
  }

  //METHODS TO DISPLAY MODAL WIN OR LOST
  @ViewChild(ResultModalComponent)
  ResultModalComponent?: ResultModalComponent;

  openWinModal() {
    if (this.ResultModalComponent && this.colony.id) {
      this.ResultModalComponent.attack = 'Win';
      this.ResultModalComponent.openModal(this.colony.id);
    }
  }

  openLostModal() {
    if (this.ResultModalComponent && this.colony.id) {
      this.ResultModalComponent.attack = 'Lost';
      this.ResultModalComponent.openModal(this.colony.id);
    }
  }
}
