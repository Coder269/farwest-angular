import { Component, OnInit, ViewChild } from '@angular/core';
import { Services } from 'src/app/services/Services';
import { Timer } from 'src/app/interfaces/Timer';
import { Ressources } from 'src/app/interfaces/ressources';
import { Colonie } from 'src/app/interfaces/colonie';
import { RessourceModalComponent } from '../ressource-modal/ressource-modal.component';
import { EquipmentsModalComponent } from '../equipments-modal/equipments-modal.component';
import { ColonyService } from 'src/app/services/colony.service';
import { RessourceService } from 'src/app/services/ressource.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-colonie',
  templateUrl: './colonie.component.html',
  styleUrls: ['./colonie.component.css'],
})
export class ColonieComponent implements OnInit {
  public colonie!: Colonie;
  public ressource!: Ressources;
  public recolt!: { wood: Date; iron: Date; gold: Date };
  public timer!: { wood: Timer; iron: Timer; gold: Timer };

  constructor(
    private service: Services,
    private colonyService: ColonyService,
    private ressourceService: RessourceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let colonyId = this.route.snapshot.paramMap.get('id');
    if (colonyId) {
      this.colonyService.getColonieById(
        parseInt(colonyId),
        (response: Colonie) => (this.colonie = response)
      );
      this.ressourceService.getRessourceOfColony(
        parseInt(colonyId),
        (response: Ressources) => {
          this.ressource = response;
        }
      );
    }

    this.recolt = {
      wood: this.service.addSeconds(new Date(), 30),
      iron: this.service.addSeconds(new Date(), 1800),
      gold: this.service.addSeconds(new Date(), 3600),
    }; //requette a faire
    console.log(this.recolt);
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

  openWoodModal() {
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
}
function log(colonie: Colonie) {
  throw new Error('Function not implemented.');
}
