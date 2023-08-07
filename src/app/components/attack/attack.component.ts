import { Colonie } from 'src/app/interfaces/colonie';
import { Ressources } from 'src/app/interfaces/ressources';
import { User } from 'src/app/Models/User';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ColonyService } from 'src/app/services/colony.service';
import { ResultModalComponent } from '../result-modal/result-modal.component';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.css'],
})
export class AttackComponent implements OnInit, OnDestroy {
  colonyId: number = 0;
  otherColonies: Colonie[] = [];
  ressourcesInfo: Ressources[] = [];
  colonyName: string = '';
  colonyImageUrl: string = '';
  numberOfCowboys: number = 0;
  availableMoney: number = 0;
  connectedUser: User | null = null;

  constructor(
    private colonyService: ColonyService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private audioService: AudioService
  ) {}

  ngOnInit(): void {
    this.audioService.stop();
    this.audioService.playAttackSound();
    this.colonyId = parseInt(this.route.snapshot.params['id']);
    this.otherColonies = this.colonyService.otherColonies;
    this.colonyService.getColonieById(
      this.colonyId,
      (ressourcesInfo: Ressources[]) => {
        this.ressourcesInfo = ressourcesInfo;
      }
    );

    for (let colony of this.otherColonies) {
      if (colony.id === this.colonyId) {
        if (colony.colonyName) this.colonyName = colony.colonyName;
        if (colony.colonyPicture) this.colonyImageUrl = colony.colonyPicture;
      }
    }

    const username: string | null = localStorage.getItem('connectedUsername');

    if (username) {
      this.userService.getUserInfo(username, (userInfo: User) => {
        this.connectedUser = userInfo;
      });
    }
  }

  //METHOD TO CHOOSE NUMBER OF COWBOYS TO ATTACK
  updateNumberOfCowboys(value: string) {
    if (value !== null && value !== undefined) {
      this.numberOfCowboys = parseInt(value) || 0;
    } else {
      this.numberOfCowboys = 0;
    }
  }

  //METHOD TO CHECK MONEY OF USER TO BUY COWBOYS
  ConfirmButtonDisabled(): boolean {
    if (
      this.connectedUser &&
      this.connectedUser.money &&
      this.connectedUser.money > 0
    ) {
      return this.numberOfCowboys <= Math.floor(this.connectedUser.money / 150);
    } else {
      return true;
    }
  }

  //METHOD TO CHECK IF USER HAS ENOUGH COWBOYS AND IF WIN OR LOST
  onConfirmButtonClicked(): void {
    if (this.ConfirmButtonDisabled()) {
      return;
    }
    if (
      this.numberOfCowboys > 0 &&
      this.ressourcesInfo[0]?.numberOfCowboy &&
      this.numberOfCowboys <= this.ressourcesInfo[0].numberOfCowboy
    ) {
      this.openWinModal();
    } else {
      this.openLostModal();
    }
  }

  //METHOD TO SET MUSIC
  ngOnDestroy(): void {
    this.audioService.stopAttackSound();
  }

  //METHODS TO DISPLAY MODAL WIN OR LOST
  @ViewChild(ResultModalComponent)
  ResultModalComponent?: ResultModalComponent;

  async openWinModal() {
    if (this.ResultModalComponent) {
      this.ResultModalComponent.attack = 'Win';
      this.ResultModalComponent.openModal();
    }
  }

  openLostModal() {
    if (this.ResultModalComponent) {
      this.ResultModalComponent.attack = 'Lost';
      this.ResultModalComponent.openModal();
    }
  }
}
