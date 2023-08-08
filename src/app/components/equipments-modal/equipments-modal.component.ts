import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Ressources } from 'src/app/interfaces/ressources';
import { MoneyService } from 'src/app/services/money.service';
import { RessourceService } from 'src/app/services/ressource.service';

@Component({
  selector: 'app-equipments-modal',
  templateUrl: './equipments-modal.component.html',
  styleUrls: ['./equipments-modal.component.css'],
})
export class EquipmentsModalComponent {
  @Input() equipment: string;
  @Input() resource!: Ressources;
  isVisible = false;

  constructor(
    public ressourceService: RessourceService,
    public router: Router
  ) {
    this.equipment = '';
  }

  openModal() {
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
  }
}
