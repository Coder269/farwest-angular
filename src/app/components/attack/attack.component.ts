import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ColonyService } from 'src/app/services/colony.service';
import { ActivatedRoute } from '@angular/router';
import { Colonie } from 'src/app/interfaces/colonie';
import { ResultModalComponent } from '../result-modal/result-modal.component';
import { AudioService } from 'src/app/audio.service';

@Component({
  selector: 'app-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.css'],
})
export class AttackComponent implements OnInit, OnDestroy {
  colonyId: number = 0;
  otherColonies: Colonie[] = [];
  colonyName: string = '';
  colonyImageUrl: string = '';

  constructor(
    private colonyService: ColonyService,
    private route: ActivatedRoute,
    private audioService: AudioService
  ) {}

  ngOnInit(): void {
    this.audioService.stop();
    this.audioService.playAttackSound();
    this.colonyId = parseInt(this.route.snapshot.params['id']);
    this.otherColonies = this.colonyService.otherColonies;

    for (let colony of this.otherColonies) {
      if (colony.id === this.colonyId) {
        if (colony.colonyName) this.colonyName = colony.colonyName;
        if (colony.colonyPicture) this.colonyImageUrl = colony.colonyPicture;
      }
    }
  }

  ngOnDestroy(): void {
    this.audioService.stopAttackSound();
  }

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
